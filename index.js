/* this changes the text inside of an element
// document.querySelector('#user > b').textContex;t = ' JASON';
// document.querySelector('#user > i').textContex;t = '?';
*/
// this is an array of number 
// [1,2,'computer',4]
// const s ='A very long sentence, 500 words long .really'
// document.querySelector('output').textContext = ['pizza',4.5][0];
const eye = document.querySelector('#eye');
const output =document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('user');
const start = document.querySelector('#start');
conts pan = document.querySelector('')
eye.addEventListener('mousedown',() =>{
    ipt.type = 'text';
});
eye.addEventListener('mouseup',() =>{
    ipt.type = 'password';
});
fm.addEventLister('submit',(e) => {
     e.preventDefault(); // this will stop the page from realoading
     const pd = 'ekpere';
     if (pd === ipt.value) {
        user.remove();
        output.remove();
        fm.remove();
        output.textContent ='sighing you in...';
        const timeoutID = setTimeout(() => {
            output.remove();
        pop.showpopover();
        clearTimeout(timeoutID);
        }, 3000);
     }else{
        output.textContext = 'Wrong password';
     }
});
//this shows/hides the #panel
StaticRange.addEventListener('click',() => {
    Pan.classlist.toggle('on');
})