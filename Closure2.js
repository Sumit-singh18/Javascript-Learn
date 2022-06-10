const Interv = (name) => {
    return function (topic) {
        Text = `${name} Explain ${topic}`;
        Twext='Welcome';
        if (name === 'Sumit') {
            document.getElementById('Writee').innerHTML = Text;
        }
       else  if (name === 'Sut') {
            document.getElementById('Write').innerHTML = Text;
        }
       else  if (name === 'Suit') {
            document.getElementById('Write').innerHTML = Text;
        }
       else  if (name === 'SUMi') {
            document.getElementById('Write').innerHTML = Text;
        }
        else {
            document.getElementById('Write').innerHTML = Twext;
        }
    }
}
Interv('Sumit')('react.js')