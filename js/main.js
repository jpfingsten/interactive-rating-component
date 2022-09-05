const btnSubmit = document.querySelector('.btn-submit');
const ratingCard = document.querySelector('#rating-card');
const thankyouCard = document.querySelector('#thankyou-card');
const submittedRatingText = document.querySelector('.submitted-rating');


btnSubmit.addEventListener('click', function () {
  const submittedRatingInput = document.querySelector('input[type=radio]:checked');
  const submittedRatingValue = submittedRatingInput.value;

  submittedRatingText.innerText = `You selected ${submittedRatingValue} out of 5.`;
  ratingCard.classList.add('hidden');
  thankyouCard.classList.remove('hidden');
});
