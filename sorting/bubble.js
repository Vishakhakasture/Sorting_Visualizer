
console.log("Start (bubble sort)")

async function bubble() {
    console.log("inside bubble function");
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length - 1;i++) {
        for(let j = 0; j < element.length -i -1; j++) {
            element[j].style.background = 'red';
            element[j + 1].style,background = 'red';
            if(parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                await waitforme(delay);
                swap(element[j], element[j + 1]);
            }
            element[j].style.background = '#b7cece';
            element[j + 1].style.background = '#b7cece';
        }
        element[element.length - 1 -i].style.background = 'green';
    }
    element[0].style.background = 'green';
}

const bubbleSorting = document.querySelector(".bubbleSort");
// console.log(bubbleSorting);
// console.log("outsite bubble function")
bubbleSorting.addEventListener('click', async function() {
   console.log("After clicking");
    disableSorting();
    disableSizeSlider();
    disableNewArray();
    await bubble();
    enableSorting();
    enableSizeSlider();
    enableNewArray();
   console.log("end of bubble sort");
});