console.log("start insertion sort")

async function insertion() {
    console.log("inside insertion function")
    const elememt = document.querySelectorAll(".bar");

    elememt[0].style.background = 'green';

    for(let i = 1; i < elememt.length; i++) {
        let j = i - 1;
        let key = elememt[i].style.height;
        elememt[i].style.background = 'red';
        
        await waitforme(delay);

        while(j >= 0 && (parseInt(elememt[j].style.height) > parseInt(key))) {
            elememt[j].style.background = 'red';
            elememt[j + 1].style.height = elememt[j].style.height;
            j--;

            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                elememt[k].style.background = 'green';
            }
        }

        elememt[j + 1].style.height = key;

        elememt[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".InsertionSort");
inSortbtn.addEventListener('click', async function() {
    disableSorting();
    disableSizeSlider();
    disableNewArray();
    await insertion();
    enableSorting();
    enableSizeSlider();
    enableNewArray();
});