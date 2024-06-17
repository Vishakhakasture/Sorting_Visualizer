/** pick pivot element
 *  pivot element -- median/first/last
 * partition function - take element (left side should be smaller than element, right side should be greater than element)
 * colors - pivot element, current element, if element not less than pivot, for swaping
 */
console.log("start quick sort")
async function partition(element, left, right){
    console.log('Inside partition function');
    let i = left - 1;
    element[right].style.background = 'red';
    for(let j = left; j <= right - 1; j++){
       
        element[j].style.background = 'yellow';
        await waitforme(delay);

        if(parseInt(element[j].style.height) < parseInt(element[right].style.height)){
            
            i++;
            swap(element[i], element[j]);
            element[i].style.background = 'orange';
            if(i != j) element[j].style.background = 'orange';
            await waitforme(delay);
        }
        else{
            element[j].style.background = 'purple';
        }
    }
    i++; 
    await waitforme(delay);
    swap(element[i], element[right]); 
    console.log(`i = ${i}`, typeof(i));
    // color
    element[right].style.background = 'purple';
    element[i].style.background = 'green';

    
    await waitforme(delay);
    
    // color
    for(let k = 0; k < element.length; k++){
        if(element[k].style.background != 'green')
            element[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(element, left, right){
    console.log('In quickSort function', `left=${left} right=${right}`, typeof(left), typeof(right));
    if(left < right){
        let pivot_index = await partition(element, left, right);
        await quickSort(element, left, pivot_index - 1);
        await quickSort(element, pivot_index + 1, r);
    }
    else{
        if(left >= 0 && right >= 0 && left <element.length && right <element.length){
            element[right].style.background = 'green';
            element[left].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".QuickSort");
quickSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let left = 0;
    let right = element.length - 1;
    disableSorting();
    disableSizeSlider();
    disableNewArray();
    await quickSort(element, left, right);
    enableSorting();
    enableSizeSlider();
    enableNewArray();
});
