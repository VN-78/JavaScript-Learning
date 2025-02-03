function findPalindrome(word){
    const lower = word.toLowerCase(); 
    const reversed = reverse(word); 
	if(lower == reversed) 
    {
        console.log(`${word} is a palindrome.`);
    }
    else
    {
        console.log(`${word} is not a palindrome.`);
    }
}

function reverse(letter) 
{   
    let arr = [];
    const lower = letter.toLowerCase();
        for(let j=lower.length-1; j>=0; j--)
        {
            let i = 0;
            const temp = lower[j];
            lower[j] = lower[i];
            lower[i] = temp;
            arr.push(lower[j]);
            i++;
            //return(rev);
            //console.log();
        }
        let result = arr.join('');
        return result;
            //console.log(rev);
}

const first = "Hannah"; 
findPalindrome(first);


// find palindrome for an array of words 

const words = ['Madam', 'RaceCar','Ciric', 'Radar', 'tomorrow', 'Bell', 'Watch','Rotator'] ;

for (let i=0; i<words.length; i++)
{
    findPalindrome(words[i]);
}