
function clickTabs () {
  const randomNumber = $('.randomNumber');
  const random = Math.floor(Math.random() * 100) + 1;
  const $texte = $('#texte');
  const $propositions = $('#propositions');
  const $turnsNumber = $('#turnsNumber')
  const $egale = $('#egale')
  let test = 10 ;

  $('.buttonCheck').on('click', function () {
    const userNumber = Number(randomNumber.val());
    test--;
    console.log(random);
    if (!test) {
      alert('Game end');
      return false;
    }

    if (!userNumber) {
      alert('Il faut remplir avec un nombre');
    }
    else {
      if (userNumber  === random) {
        $egale.text('! ! ! Bien Jouer ! ! !');
      }
      else if (userNumber  < random) {
        $propositions.text('Le nombre saisie est trop petit');
        $texte.text('Proposition précédente: '  + userNumber);
        $turnsNumber.text('Il te reste ' + test + ' chance');
      }
      else  {
        $propositions.text('Le nombre saisie est trop grand');
        $texte.text('Proposition précédente: ' + userNumber);
        $turnsNumber.text('Il te reste ' + test + ' chance');

      }
    }

     return false;
  })
};
clickTabs();
