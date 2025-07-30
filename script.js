function changeAboutmetext()
{
    const aboutMetexts=['Useless','dumb','lazy'];
    const typinspeed=100;
    const erasingspeed=50;
    const pause=1200;
    const aboutmeelement=document.querySelector('.about-me');
}
let textIndex=0;
let charindex=0;
let isdeleting=false;
function type()
{
    const currenttext=aboutMetexts(textIndex);
    if(!isdeleting&& charindex<currenttext.length)
    {
        aboutmeelement.textContent +=currenttext[charindex];
        charindex--;
        setTimeout(type,erasingspeed);

    }
    else if (isdeleting &&charindex>0){
        aboutmeelement.textContent=currenttext
    }

}