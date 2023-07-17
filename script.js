console.log(five_letter)

const Word = five_letter[Math.floor(Math.random()*five_letter.length)];

document.getElementById("submit").onclick = () => 
{
    let val = document.getElementById("input").value.toUpperCase();
    if (five_letter.includes(val))
    {
        let result = document.getElementById("result")
        if (Word == val)
        {
            for(let i =0 ; i < val.length;i++)
            {
                result.innerHTML += `<div class="here">${val[i]}</div>`
            }
            alert("You won!!!")
            document.getElementById('input').disabled = true;
            document.getElementById('submit').disabled = true;
        }
        else
        {
            
            for(let i =0 ; i < val.length;i++)
            {

                if(Word[i] == val[i])
                {
                    result.innerHTML += `<div class="here">${val[i]}</div>`
                }
                else if(Word.includes(val[i]))
                {
                    result.innerHTML += `<div class="consists">${val[i]}</div>`
                }
                else
                {
                    result.innerHTML += `<div class='nowhere'>${val[i]}</div>`
                }
            }
        }
        for(let i=0; i<5;i++)
        {
            result.children[i].remove()
        }
        document.getElementById('input').value = "";
    }
    else
    {
        alert("This word is not included in dictionary, try something else")
    }
}

for(let i=0; i<6; i++)
{
    for(let i=0; i<5; i++)
    {
        result.innerHTML+=`<div class="nowhere"></div>`
    }
}