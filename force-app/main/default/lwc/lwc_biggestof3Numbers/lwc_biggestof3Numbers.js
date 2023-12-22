/**
 * @description       : 
 * @author            : Dharmarapu Naveen
 * @group             : 
 * @last modified on  : 12-20-2023
 * @last modified by  : Dharmarapu Naveen
 * Modifications Log
 * Ver   Date         Author              Modification
 * 1.0   12-12-2023   Dharmarapu Naveen   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Lwc_biggestof3Numbers extends LightningElement {
    fnum;
    snum;
    tnum;
    handlefirst(event){
        this.fnum=event.target.value;
    }
    handlesecond(event){
        this.snum=event.target.value;
    }
    handlethird(event){
        this.tnum=event.target.value;
    }
    handleSubmit(event){
        const a=parseInt(this.fnum);
        const b=parseInt(this.snum);
        const c=parseInt(this.tnum);
        if(a>b && a>c){
            alert('First Number is Big  '+a);
        }
        else if(b>a && b>c){
            alert('Second Number is Big  '+b);
        }
        else{
            alert('Third Number is Big:  '+c);
        }
    }
    handleClear(event){
        this.fnum='';
        this.snum='';
        this.tnum='';

    }

}