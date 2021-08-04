(function () {
	"use_strict";
	
	
	
	
	/**
	* Steps options 'checkboxes' and 'radios'
	* module: step-card
	*/
	document.addEventListener("change", (e) => {
		const {target, type } = e;
		
		 if (type === 'change' && target.parentNode.classList.contains('step-option__title')) {
			 const stepOption = target.parentNode.parentNode.classList,
				 allInput = target.closest('.step-options').querySelectorAll(`input[name="${target.name}"]`),
				 allInputChecked = Array.from(allInput).filter(el => el.checked),
				 dialogModal = target.closest('.modal-dialog') !== null && target.closest('.modal-dialog'),
				 dialogId = dialogModal && dialogModal.nextSibling.previousElementSibling.attributes[0].nodeValue,
				 dialogElClose = dialogModal && document.querySelector(`#${dialogId} .close-dialog`);
			 
			 if ( stepOption.contains('step-option') && stepOption.contains('checkbox')  ) {
				 target.checked ? stepOption.add('active') : stepOption.remove('active');
				 allInputChecked.length > 0 ? dialogModal && dialogElClose.classList.remove('disable') : dialogModal && dialogElClose.classList.add('disable');
			 } else if (stepOption.contains('step-option') && stepOption.contains('radio') ) {
				 target.checked && stepOption.add('active');
				 allInputChecked.length > 0 ? dialogModal && dialogElClose.classList.remove('disable') : dialogModal && dialogElClose.classList.add('disable');
				 allInput.forEach(el => {
					 el.id !== target.id && el.closest('.step-option').classList.remove('active')
				 });
			 }
			 
		 }
		
	});
	//********
	
	/**
	 * Check if you are client fields in the step1_client
	 * module: step-card
	 */
	document.addEventListener("change", (e) => {
		const {target, type } = e;
		if (type === 'change' && target.parentNode.classList.contains('step-option__title')) {
			const isLogin = target.closest('.step-options').classList.contains('show-login-msg');
			if ( isLogin ) {
				const wrapper = document.querySelector(`.step-card-action`),
					nextBtn = document.querySelector('.step-card-next'),
					def_href = nextBtn.url;
				if ( target.value === 'yes' ) {
					wrapper && wrapper.classList.add('show');
					nextBtn.children[0].href = 'step_login.html';
					nextBtn.classList.remove('disable');
				} else if (  target.value === 'no' ) {
					wrapper && wrapper.classList.remove('show');
					nextBtn.children[0].href = def_href;
					nextBtn.classList.remove('disable');
				}
				
			}
		}
		
	});
	//********
	
	/**
	 * If the user clicks on "Moving" or "Other",
	 * client has a message saying that he has to login
	 * module: step-card
	 */
	const step1_why_options = document.querySelectorAll('[name="step1_why-option"]');
	step1_why_options.forEach((el, i) => {
		el.addEventListener("change", (e) => {
			const target = e.target;
			if (target.parentNode.classList.contains('step-option__title')) {
				const isLogin = target.closest('.step-options').classList.contains('show-login-msg');
				if ( isLogin ) {
					const wrapper = document.querySelector(`.step-card-action`),
						nextBtn = document.querySelector('.step-card-next'),
						def_href = nextBtn.url;
					if ( target.value === 'Moving' || target.value === 'Other' ) {
						wrapper && wrapper.classList.add('show');
						nextBtn.children[0].href = 'step_login.html';
						nextBtn.classList.remove('disable');
					} else {
						wrapper && wrapper.classList.remove('show');
						nextBtn.children[0].href = def_href;
						nextBtn.classList.remove('disable');
					}
				}
			}
		});
	});
	//********
	
	/**
	 * If the user clicks on "Professional",
	 * client has a message saying that he has to login
	 * module: step-card
	 */
	const step1_who_options = document.querySelectorAll('[name="step1_who-option"]');
	step1_who_options.forEach((el, i) => {
		el.addEventListener("change", (e) => {
			const target = e.target;
			if (target.parentNode.classList.contains('step-option__title')) {
				const isLogin = target.closest('.step-options').classList.contains('show-login-msg');
				if ( isLogin ) {
					const wrapper = document.querySelector(`.step-card-action`),
						nextBtn = document.querySelector('.step-card-next'),
						def_href = nextBtn.url;
					if ( target.value === 'Professional' ) {
						wrapper && wrapper.classList.add('show');
						nextBtn.children[0].href = 'step_login.html';
						nextBtn.classList.remove('disable');
					} else {
						wrapper && wrapper.classList.remove('show');
						nextBtn.children[0].href = def_href;
						nextBtn.classList.remove('disable');
					}
				}
			}
		});
	});
	//********
	
	/**
	* Check if client number is empty in the step1_client
	* module: step-card
	*/
	/*document.addEventListener("input", (e) => {
		const {target, type } = e;
		if ( type === 'input' && target.parentNode.classList.contains('hydrated') ) {
			const clientNumber = target.closest('.client-number');
			if ( clientNumber !== null ) {
				const nextBtn = document.querySelector('.step-card-next');
				if ( target.value.length > 0 ) {
					nextBtn.classList.remove('disable');
				} else {
					nextBtn.classList.add('disable');
				}
			}
		}
		
	});*/
	//********
	
	
	/**
	 * Check if all inputs is empty in the step
	 * module: step-form
	 */
	const formOptions = document.querySelectorAll(`.form-options .form-option`);
	formOptions.forEach((el, i) => {
		el.addEventListener("typingField", (e) => {
			const target = e.target;
			if ( target.classList.contains('hydrated') ) {
				const isFormOption = target.nextSibling.parentNode.classList.contains('.form-options');
				const wrapper = document.querySelector(`.step-card-action`);
				if (  isFormOption !== null && formOptions.length-1 === i ) {
					const nextBtn = document.querySelector('.step-card-next');
					if ( e.detail.length > 0 ) {
						nextBtn.classList.remove('disable');
						wrapper && wrapper.classList.add('show');
					} else {
						nextBtn.classList.add('disable');
						wrapper && wrapper.classList.remove('show');
					}
				}
			}
		});
	});
	//********
	
	/**
	 * Add Action for Dialog
	 * module: step-form
	 */
	const dialogBtns = document.querySelectorAll(".modal-button");
	dialogBtns.forEach((el, i) => {
		
		el.addEventListener("clickButton", function() {
			let id = el.attributes[0].nodeValue,
				dialogEl = document.querySelector(`#dialog-${id}`),
				dialogElClose = document.querySelector(`#dialog-${id} .close-dialog`);
			
			dialogEl.open();
			
			dialogEl.addEventListener("clickBackdropHandler", function(e) {
				dialogEl.close();
			}, false);
			
			dialogElClose.addEventListener("click", function(e) {
				dialogEl.close();
			}, false);
			
		});
		
	});
	//********
	
	/**
	 * Date Picker
	 * module: step-form
	 */
	const datePicker = document.querySelector(".form-option.date-picker");
	const textFieldDatePicker = document.querySelector("#field-date-picker");
	datePicker && datePicker.addEventListener("clickDatePicker", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldDatePicker.dataValue = e.detail.formatted;
		textFieldDatePicker.clearButton = true;
		textFieldDatePicker.iconLeading = undefined;
		nextBtn.classList.remove('disable');
	}, false);
	textFieldDatePicker && textFieldDatePicker.addEventListener("cleaningField", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldDatePicker.clearButton = false;
		textFieldDatePicker.iconLeading = "calendar-alt";
		datePicker.reset();
		nextBtn.classList.add('disable');
	}, false);
	
	//********
	
	/**
	 * Date Picker
	 * module: step-form
	 */
	const birthdayPicker = document.querySelector(".form-option.birthday-picker");
	const textFieldBirthdayPicker = document.querySelector("#field-birthday-picker");
	birthdayPicker && birthdayPicker.addEventListener("clickDatePicker", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldBirthdayPicker.dataValue = e.detail.formatted;
		textFieldBirthdayPicker.clearButton = true;
		textFieldBirthdayPicker.iconLeading = undefined;
		nextBtn && nextBtn.classList.remove('disable');
	}, false);
	textFieldBirthdayPicker && textFieldBirthdayPicker.addEventListener("cleaningField", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldBirthdayPicker.clearButton = false;
		textFieldBirthdayPicker.iconLeading = "calendar-alt";
		birthdayPicker.reset();
		nextBtn && nextBtn.classList.add('disable');
	}, false);
	
	//********
	
	
	/**
	 * Add Action for Offer Dialog
	 * module: step-form
	 */
	const offerCheckbox = document.querySelectorAll(".offer-option input");
	offerCheckbox && offerCheckbox.forEach((el, i) => {
		el.addEventListener("change", function(e) {
			const { target } = e;
			
			const offerOption = target.closest('.offer-option').classList,
				allInput = target.closest('.offer-options').querySelectorAll(`input[name="${target.name}"]`),
				allInputChecked = Array.from(allInput).filter(el => el.checked),
				isDialogModal = document.querySelector('.offer-dialog') !== null,
				dialogId = isDialogModal && target.value,
				dialogModal = dialogId && document.querySelector(`#${dialogId}`),
				dialogElClose = dialogModal && document.querySelector(`#${dialogId} .close-dialog`),
				dialogElSelect = dialogModal && document.querySelector(`#${dialogId} .offer-button`);
			
		/*	if ( offerOption.contains('offer-option') && offerOption.contains('checkbox')  ) {
				target.checked ? offerOption.add('active') : offerOption.remove('active');
				allInputChecked.length > 0 ? dialogModal && dialogElClose.classList.remove('disable') : dialogModal && dialogElClose.classList.add('disable');
			} else if (offerOption.contains('offer-option') && offerOption.contains('radio') ) {
				target.checked && offerOption.add('active');
				allInputChecked.length > 0 ? dialogModal && dialogElClose.classList.remove('disable') : dialogModal && dialogElClose.classList.add('disable');
				allInput.forEach(el => {
					el.id !== target.id && el.closest('.offer-option').classList.remove('active')
				});
			}*/
			
			dialogModal.open();
			dialogModal.addEventListener("clickBackdropHandler", function(e) {
				dialogModal.close();
			}, false);
			
			dialogElClose.addEventListener("click", function(e) {
				dialogModal.close();
			}, false);
			
			dialogElSelect.addEventListener("click", function(e) {
				const target_btn = e.target,
					btn = target_btn.closest('.offer-button'),
					targetId = target_btn.closest('.offer-dialog').id;
				
				triggerEvent(el, 'change');
				
				if ( allInputChecked.length > 0 ) {
					const allBtns = document.querySelectorAll(`.offer-dialog .offer-button`);
					allInput.forEach(el => {
						el.id !== target.id && el.closest('.offer-option').classList.remove('active');
					});
					allBtns.forEach(el => {
						if ( el.closest('.offer-dialog').id !== targetId ) {    
							el.classList.remove('active');
							console.log(el.children[0].children[0].children[0]);
							el.children[0].children[0].children[0].innerText = 'Select this offer';
						}
					});
				}
				
				if ( btn.classList.contains('active') ) {
					btn.classList.remove('active');
					target_btn.innerText = 'Select this offer';
					offerOption.remove('active');
					//target.checked = true;
					dialogModal.close();
				} else {
					btn.classList.add('active');
					target_btn.innerText = 'Unselect this offer';
					offerOption.add('active');
					//target.checked = false;
					dialogModal.close();
				}
				
			}, false);
		});
	});
	//********
	
	
	/**
	 * Add Action for Confirm Offer
	 * module: step-form
	 */
	const confirmOfferAction = document.querySelectorAll(".confirm-action:not(.confirm-action-modal)");
	confirmOfferAction && confirmOfferAction.forEach((el, i) => {
		el.addEventListener("clickItem", function() {
			const url = el.attributes.url && el.attributes.url.nodeValue;
			url && (window.location.href = url);
		});
	});
	//********
	
	function triggerEvent (element, eventName) {
		let event = new Event(eventName);
		element.dispatchEvent(event);
	}
	
	
	/**
	 * Check if OnBoarding postcode is empty in the step
	 * template: OnBoarding
	 */
	const postcodeOption = document.querySelector(`.postcode-wrapper .postcode-field`);
	if (postcodeOption && postcodeOption.length > 0) {
		postcodeOption.addEventListener("typingField", (e) => {
			const target = e.target;
			
			if ( target.classList.contains('hydrated') ) {
				const submitBtn = document.querySelector('.start-btn');
				if ( e.detail.length > 0 ) {
					submitBtn.classList.remove('disabled');
				} else {
					submitBtn.classList.add('disabled');
				}
			}
		});
	}
	//********
	
	/**
	 * Check if meter is checked in the step1
	 * template: electricity-meter
	 */
	document.addEventListener("change", (e) => {
		const {target, type } = e;
		if (type === 'change' && target.parentNode.classList.contains('step-option__title')) {
			const isMeter = target.closest('.step-options').classList.contains('meter-options'),
				allInput = target.closest('.step-options').querySelectorAll(`input[name="${target.name}"]`),
				allInputChecked = Array.from(allInput).filter(el => el.checked);
			if ( isMeter ) {
				const nextBtn = document.querySelector('.step-card-next');
				if ( allInputChecked.length > 0 ) {
					nextBtn.classList.remove('disable');
				} 
				
			}
		}
		
	});
	//********
	
	/**
	 * Check GDPR consentement
	 */
	const consentement = document.querySelector(`[name="consentement-checkbox"]`);
	consentement && consentement.addEventListener("change", (e) => {
		const {target, type } = e,
			checkboxWrap = target.closest('.checkbox'),
			nextBtn = document.querySelector('.step-card-next');
		if ( target.checked ) {
			nextBtn.classList.remove('disable');
			checkboxWrap.classList.add('active');
		} else {
			nextBtn.classList.add('disable');
			checkboxWrap.classList.remove('active');
		}
		
	});
	//********
	
	/**
	 * Custom Selects
	 */
	const customSelectCountry = document.querySelector(`.form-option.select-wrapper.country`);
	const customSelectCivility = document.querySelector(`.form-option.select-wrapper.civility`);
	const customSelectLanguage = document.querySelector(`.form-option.select-wrapper.language`);
	customSelectCountry && initSelect(customSelectCountry);
	customSelectCivility && initSelect(customSelectCivility);
	customSelectLanguage && initSelect(customSelectLanguage);
	
	function initSelect(elem){
		let selectHolder = elem.querySelector('.holder');
		let selectOptions = elem.querySelectorAll('.dropdownOption li');
		let dropHolder = elem.querySelector('.dropdown');
		let selectValue = elem.querySelector('.select-wrapper-value');
		let selectedOption = selectOptions[0];
		  
		selectedOption.classList.add('current');
		
		selectHolder.addEventListener('click', function () {
			dropHolder.classList.toggle('active');
		});
		
		selectOptions.forEach(function(currentElement) {
			currentElement.addEventListener('click', function(){
				selectedOption.classList.remove('current');
				selectedOption = currentElement;
				currentElement.classList.add('current');
				selectHolder.innerText = currentElement.textContent;
				dropHolder.classList.toggle('active');
				selectValue.value = currentElement.innerText;
			});
		});
	}
	//********
	
	/**
	 * Confirm client consent
	 */
	const confirmConsentAll = document.querySelectorAll(`[name="confirm-checkbox"]`);
	confirmConsentAll && confirmConsentAll.forEach((el, i) => {
		el.addEventListener("change", (e) => {
			const {target, type } = e,
				checkboxWrap = target.closest('.checkbox'),
				nextBtn = document.querySelector('.step-card-next'),
				allInput = target.closest('.step-card-wrapper').querySelectorAll(`input[name="${target.name}"]`),
			allInputChecked = Array.from(allInput).filter(el => el.checked);
			
			target.checked ? checkboxWrap.classList.add('active') : checkboxWrap.classList.remove('active');
			
			if ( allInputChecked.length === allInput.length ) {
				nextBtn.classList.remove('disable');
			} else if (allInputChecked.length !== allInput.length) {
				nextBtn.classList.add('disable');
			}
			
		});
	});
	//********
	
	/**
	 * Add Action for Confirm Profile with Modals
	 * 
	 */
	const confirmModalAction = document.querySelectorAll(".confirm-action-modal");
	confirmModalAction && confirmModalAction.forEach((el, i) => {
		el.addEventListener("clickItem", function() {
			const modal = el.attributes.modal && el.attributes.modal.nodeValue;
			console.log(modal);
			const dialogModal = document.querySelector(`#${modal}`),
				dialogElClose = dialogModal && document.querySelector(`#${modal} .close-dialog`);
			
			dialogModal.open();
			dialogModal.addEventListener("clickBackdropHandler", function(e) {
				dialogModal.close();
			}, false);
			
			dialogElClose.addEventListener("click", function(e) {
				dialogModal.close();
			}, false);
			
			
		});
	});
	//********
	
})();