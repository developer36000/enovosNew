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
			const isClient = target.closest('.step-options').classList.contains('is-client');
			if ( isClient ) {
				const wrapper = document.querySelector(`.step-card-action`);
				if ( target.value === 'yes' ) {
					wrapper.classList.add('show');
				} else if (  target.value === 'no' ) {
					wrapper.classList.remove('show');
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
						nextBtn = document.querySelector('.step-card-next');
					if ( target.value === 'Moving' || target.value === 'Other' ) {
						wrapper.classList.add('show');
						nextBtn.classList.add('disable');
					} else {
						wrapper.classList.remove('show');
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
						nextBtn = document.querySelector('.step-card-next');
					if ( target.value === 'Professional' ) {
						wrapper.classList.add('show');
						nextBtn.classList.add('disable');
					} else {
						wrapper.classList.remove('show');
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
						wrapper.classList.add('show');
					} else {
						nextBtn.classList.add('disable');
						wrapper.classList.remove('show');
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
	datePicker.addEventListener("clickDatePicker", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldDatePicker.dataValue = e.detail.formatted;
		textFieldDatePicker.clearButton = true;
		textFieldDatePicker.iconLeading = undefined;
		nextBtn.classList.remove('disable');
	}, false);
	textFieldDatePicker.addEventListener("cleaningField", function(e) {
		const nextBtn = document.querySelector('.step-card-next');
		textFieldDatePicker.clearButton = false;
		textFieldDatePicker.iconLeading = "calendar-alt";
		datePicker.reset();
		nextBtn.classList.add('disable');
	}, false);
	//********
	
})();