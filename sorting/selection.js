/**  finds the minimum element and puts it in the beginning
 * Logic (Inside Async function)
 * Change color accordingly
 * delay
 * event listeners
*/




console.log("Start (selection sort)")
async function selection() {
    console.log("inside selection sort");
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length;i++) {
        let min_index = i;
        // change color
        element[i].style.background = 'red';


        for(let j = i+1; j < element.length; j++) {
            //change color
            element[j].style.background = 'red';
            
            await waitforme(delay);
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)) {
            
                if(min_index !== 1) {
                    element[min_index].style.background = '#b7cece';
                }
                min_index = j;
            
                }

                else {
                    element[j].style.background = '#b7cece';
                }
        }
        await waitforme(delay);
            swap(element[min_index], element[i]);

            element[min_index].style.background = '#b7cece';

            element[i].style.background = 'green'
      
    }
}



const selectionSortBtn = document.querySelector(".SelectionSort");
selectionSortBtn.addEventListener('click', async function() {
    disableSorting();
    disableSizeSlider();
    disableNewArray();
    await selection();
    enableSorting();
    enableSizeSlider();
    enableNewArray();
    console.log("end of selection sort");
});