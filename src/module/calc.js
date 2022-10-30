
const calc = () => {
    const calcBtns = document.querySelectorAll('.btn_mini');
    const calcBlocks = document.querySelectorAll('.calc__block ');
    const btnsNext = document.querySelectorAll('.btn__block_next');
    const btnsPrev = document.querySelectorAll('.btn__block_prev');
    const btnsLayer = document.querySelectorAll('.btn_layer ');
    const btnsDelivery = document.querySelectorAll('.btn_delivery');
    const btnsPost = document.querySelectorAll('.btn_post')
   
    let count = 0;


    const getCount = (elements) => {
        if (elements === btnsNext) {
            count++;
            if (count > btnsNext.length - 1) {
                count = 0;
            }
            return count;
        }
        
        if (elements === btnsPrev) {
            count--;
            if (count < 0) {
                count = btnsNext.length - 1;
            }
            return count;
        }
    };

    const getBlockCalc = (btns) => {
        btns.forEach((btn, index) => {
        
            btn.addEventListener('click', (e) => {
                calcBtns.forEach((el, id) => {
                    el.classList.remove('btn_mini_active');
                    calcBlocks[id].classList.remove('calc__block_active');
                });
    
                btn.classList.add('btn_mini_active');
                calcBlocks[index].classList.add('calc__block_active');
                  
            });
        });
    };
    getBlockCalc(calcBtns);

    
    const getDataBtn = (btns, selector) => {
        btns.forEach(btn => {
        
            btn.addEventListener('click', (e) => {
                btns.forEach(el => {
                    el.classList.remove(selector);   
                });
                btn.classList.add(selector);   
            });
        });
    };
    getDataBtn(btnsLayer, 'btn_layer_active');
    getDataBtn(btnsDelivery, 'btn_delivery_active');
    getDataBtn(btnsPost, 'btn_post_active');






    const runCalcPanel = (elems) => {
        elems.forEach(btn => {
            btn.addEventListener('click', () => {
                calcBtns.forEach((el, id) => {
                    el.classList.remove('btn_mini_active');
                    calcBlocks[id].classList.remove('calc__block_active');
                });
                getCount(elems);
                calcBtns[count].classList.add('btn_mini_active');
                calcBlocks[count].classList.add('calc__block_active');
            });
        });
    };
    runCalcPanel(btnsNext);
    runCalcPanel(btnsPrev);
    
    
    
};
export default calc;