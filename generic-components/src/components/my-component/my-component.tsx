import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import moment from 'moment';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private textFormato?: HTMLInputElement
  private textInitYear?: HTMLInputElement
  private textInitMonth?: HTMLInputElement
  private textInitDay?: HTMLInputElement

  private textEndYear?: HTMLInputElement
  private textEndMonth?: HTMLInputElement
  private textEndDay?: HTMLInputElement

  private initialDateLabel;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  deleteInitialMonth(e){
    this.textInitMonth.value = "";
    this.toggleEnabledInitialMonth(e);
    this.deleteInitialDay(e);
    this.deleteEndYear(e);
    this.deleteEndMonth(e);
    this.deleteEndDay(e);
  }

  toggleEnabledInitialMonth(e){
    if (this.textInitYear.value != ""){
      this.textInitMonth.disabled = false;
    } else {
      this.textInitMonth.disabled = true;
    }
  }

  deleteInitialDay(e){
    this.textInitDay.value = "";
    this.textInitDay.disabled = true;
    this.toggleEnabledInitialDay(e);
    this.deleteEndYear(e);
    this.deleteEndMonth(e);
    this.deleteEndDay(e);
  }

  toggleEnabledInitialDay(e){
    if (this.textInitMonth.value != ""){
      this.textInitDay.disabled = false;
    } else {
      this.textInitDay.disabled = true;
    }
  }

  deleteEndYear(e){
    this.textEndYear.value = "";
    this.textEndYear.disabled = true;
    this.deleteEndMonth(e);
    this.deleteEndDay(e);
    this.toggleEnabledEndYear(e);
    this.formatInitialDate()
  }

  toggleEnabledEndYear(e){
    if (this.textInitDay.value != ""){
      this.textEndYear.disabled = false;
    } else {
      this.textEndYear.disabled = true;
    }
  }

  deleteEndMonth(e){
    this.textEndMonth.value = "";
    this.textEndMonth.disabled = true;
    this.deleteEndDay(e);
    this.toggleEnabledEndMonth(e);
  }

  toggleEnabledEndMonth(e){
    if (this.textEndYear.value != ""){
      this.textEndMonth.disabled = false;
    } else {
      this.textEndMonth.disabled = true;
    }
  }

  deleteEndDay(e){
    this.textEndDay.value = "";
    this.textEndDay.disabled = true;
    this.toggleEnabledEndDay(e);
  }

  toggleEnabledEndDay(e){
    if (this.textEndMonth.value != ""){
      this.textEndDay.disabled = false;
    } else {
      this.textEndDay.disabled = true;
    }
  }

  formatInitialDate(){
    let initialDate = this.textInitYear.value + "-" + this.textInitMonth.value + "-" + this.textInitDay.value;
    console.log("fec", initialDate)
    if(this.textInitDay){
      this.initialDateLabel = moment(initialDate).zone(-5).format(this.textFormato.value != "" ? this.textFormato.value : "YYYY-MM-DD");
      if (!moment(this.initialDateLabel, this.textFormato.value).isValid()){
        this.initialDateLabel = "Fecha o formato no válidos";
      }
    }else{
      this.initialDateLabel =  "";
    }

    console.log("fec2", this.initialDateLabel)
  }

  render() {
    return (
    <div>
      <p>
        Digite el formato de las fechas:  &nbsp;
        <input ref={el => this.textFormato = el as HTMLInputElement } onKeyPress={(e)=>this.deleteEndYear(e)} id="formato" type="text" placeholder="Formato fecha"></input>
      </p>
      <p>
        <input ref={el => this.textInitYear = el as HTMLInputElement } id="initYear" type="text" placeholder="yyyy" onKeyPress={(e)=>this.deleteInitialMonth(e)}></input>
        <input ref={el => this.textInitMonth = el as HTMLInputElement } disabled={true} onKeyPress={(e)=>this.deleteInitialDay(e)} id="initMonth" name= "mon" type="text" placeholder="MM"></input>
        <input ref={el => this.textInitDay = el as HTMLInputElement } disabled={true} onKeyPress={(e)=>this.deleteEndYear(e)} id="initDay" type="text" placeholder="DD"></input>
        <div>{this.initialDateLabel}</div>
      </p>
      <p>
        <input ref={el => this.textEndYear = el as HTMLInputElement } disabled={true} onKeyPress={(e)=>this.deleteEndMonth(e)} id="endYear" type="text" placeholder="yyyy"></input>
        <input ref={el => this.textEndMonth = el as HTMLInputElement } disabled={true} onKeyPress={(e)=>this.deleteEndDay(e)} id="endMonth" type="text" placeholder="MM"></input>
        <input ref={el => this.textEndDay = el as HTMLInputElement } disabled={true} id="endDay" type="text" placeholder="DD"></input>
      </p>
    </div>)
  }

}
