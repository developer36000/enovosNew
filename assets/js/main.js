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
				 allInput = target.closest('.step-options').querySelectorAll(`input[name="${target.name}"]`);
			
			 if ( stepOption.contains('step-option') && stepOption.contains('checkbox')  ) {
				 target.checked ? stepOption.add('active') : stepOption.remove('active');
			 } else if (stepOption.contains('step-option') && stepOption.contains('radio') ) {
				 target.checked && stepOption.add('active');
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
	* Check if client number is empty in the step1_client
	* module: step-card
	*/
	document.addEventListener("input", (e) => {
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
		
	});
	//********
	
	
})();