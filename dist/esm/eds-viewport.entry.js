import { r as registerInstance, h, g as getElement, H as Host } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

function isFunction(x) {
    return typeof x === 'function';
}

let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

function hostReportError(err) {
    setTimeout(() => { throw err; }, 0);
}

const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete() { }
};

const isArray = (() => Array.isArray || ((x) => x && typeof x.length === 'number'))();

function isObject(x) {
    return x !== null && typeof x === 'object';
}

const UnsubscriptionErrorImpl = (() => {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;

class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let errors;
        if (this.closed) {
            return;
        }
        let { _parentOrParents, _ctorUnsubscribe, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (let index = 0; index < _parentOrParents.length; ++index) {
                const parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            let index = -1;
            let len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    }
    add(teardown) {
        let subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        let { _parentOrParents } = subscription;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        const subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof UnsubscriptionError) ? err.errors : err), []);
}

const rxSubscriber = (() => typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random())();

class Subscriber extends Subscription {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [rxSubscriber]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parentOrParents } = this;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = config;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}

class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [observable]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor =  Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

const ObjectUnsubscribedErrorImpl = (() => {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

class SubjectSubscription extends Subscription {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}

class SubjectSubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends Observable {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [rxSubscriber]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    }
    asObservable() {
        const observable = new Observable();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    }
}

const viewportCss = "[name=viewport]::before{display:none;content:\"xxs\"}@media screen and (min-width: 100%){[name=viewport]::before{content:\"xs\"}}@media screen and (min-width: 640px){[name=viewport]::before{content:\"sm\"}}@media screen and (min-width: 864px){[name=viewport]::before{content:\"md\"}}@media screen and (min-width: 100%){[name=viewport]::before{content:\"lg\"}}@media screen and (min-width: 1440px){[name=viewport]::before{content:\"xlg\"}}";

const ENOVOSViewport = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.viewport = 'xxs';
    this.breakpoints = ['xxs', 'xs', 'sm', 'md', 'lg', 'xlg'];
    this.subject = new Subject;
    this.classNames = {
      EL: 'viewport'
    };
  }
  connectedCallback() {
    this.subject = new Subject();
  }
  async subscribe(callback) {
    return this.subject.subscribe(callback);
  }
  async getViewport() {
    return window.getComputedStyle(this.el, '::before').content.replace(/"(.*)"/, '$1');
  }
  async isBiggerThan(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) < this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints.');
      return false;
    }
  }
  async isEqualTo(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) === this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints .');
      return false;
    }
  }
  async isSmallerThan(viewport) {
    const current = await this.getViewport();
    if (this.breakpoints.includes(viewport)) {
      return (this.breakpoints.indexOf(viewport) > this.breakpoints.indexOf(current));
    }
    else {
      console.warn('This viewport not exist in this.breakpoints .');
      return false;
    }
  }
  async handleResize() {
    const current = await this.getViewport();
    if (current !== this.viewport) {
      this.subject.next({ prev: this.viewport, current });
      this.viewport = current;
    }
  }
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (h(Host, { name: this.classNames.EL }));
  }
  get el() { return getElement(this); }
};
ENOVOSViewport.style = viewportCss;

export { ENOVOSViewport as eds_viewport };
