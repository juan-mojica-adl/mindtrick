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
  private textInitYear?: HTMLSelectElement
  private textInitMonth?: HTMLSelectElement
  private textInitDay?: HTMLSelectElement

  private textEndYear?: HTMLSelectElement
  private textEndMonth?: HTMLSelectElement
  private textEndDay?: HTMLSelectElement

  private initialDateLabel?: HTMLInputElement
  private finalDateLabel?: HTMLInputElement
  private years;
  private months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  private days;

  constructor(){
    this.getYears(1990, 2020)
    this.getDays();
  }

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
    console.log(e)
    if (this.textInitYear.value != ""){
      this.textInitMonth.disabled = false;
    } else {
      this.textInitMonth.disabled = true;
    }
  }

  deleteInitialDay(e){
    console.log(e)
    this.textInitDay.value = "";
    this.textInitDay.disabled = true;
    this.toggleEnabledInitialDay(e);
    this.deleteEndYear(e);
    this.deleteEndMonth(e);
    this.deleteEndDay(e);
  }

  toggleEnabledInitialDay(e){
    console.log(e)
    if (this.textInitMonth.value != ""){
      this.textInitDay.disabled = false;
    } else {
      this.textInitDay.disabled = true;
    }
  }

  deleteEndYear(e){
    console.log(e)
    this.textEndYear.value = "";
    this.textEndYear.disabled = true;
    this.deleteEndMonth(e);
    this.deleteEndDay(e);
    this.toggleEnabledEndYear(e);
    this.formatInitialDate();
  }

  toggleEnabledEndYear(e){
    console.log(e)
    if (this.textInitDay.value != ""){
      this.textEndYear.disabled = false;
    } else {
      this.textEndYear.disabled = true;
    }
  }

  deleteEndMonth(e){
    console.log(e)
    this.textEndMonth.value = "";
    this.textEndMonth.disabled = true;
    this.deleteEndDay(e);
    this.toggleEnabledEndMonth(e);
  }

  toggleEnabledEndMonth(e){
    console.log(e)
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
    console.log(e)
    if (this.textEndMonth.value != ""){
      this.textEndDay.disabled = false;
    } else {
      this.textEndDay.disabled = true;
    }
  }

  executeLastValidation(e){
    this.formatEndDate();
  }

  formatDates(e){
    this.formatInitialDate();
    this.formatEndDate();
  }

  formatInitialDate(){
    let initialDate = this.textInitYear.value + "-" + this.textInitMonth.value + "-" + this.textInitDay.value;
    if(this.textInitDay){
      this.initialDateLabel.value = moment(initialDate).zone(-5).format(this.textFormato.value != "" ? this.textFormato.value : "YYYY-MM-DD");
      if (!moment(this.initialDateLabel.value, this.textFormato.value).isValid()){
        this.initialDateLabel.value = "Fecha o formato no válidos";
      }
    }else{
      this.initialDateLabel.value =  "";
    }
    console.log("fec2", this.initialDateLabel)
  }

  formatEndDate(){
    let endDate = this.textEndYear.value + "-" + this.textEndMonth.value + "-" + this.textEndDay.value;
    if(this.textEndDay){
      this.finalDateLabel.value = moment(endDate).zone(-5).format(this.textFormato.value != "" ? this.textFormato.value : "YYYY-MM-DD");
      if (!moment(this.finalDateLabel.value, this.textFormato.value).isValid()){
        this.finalDateLabel.value = "Fecha o formato no válidos";
      }
    }else{
      this.finalDateLabel.value =  "";
    }
    console.log("fec2", this.finalDateLabel)
  }

  getYears(minYear, maxYear){
    this.years = new Array();
    for (var i = minYear; i<=maxYear; i++){
      this.years.push(i);
    }
  }

  getDays(){
    this.days = new Array();
    for (var i=1; i<=31; i++){
      this.days.push(i);
    }
  }

  render() {
    return (
    <div>
      <p>
        Digite el formato de las fechas:  &nbsp;
        <input ref={el => this.textFormato = el as HTMLInputElement } onKeyPress={(e)=>this.formatDates(e)} id="formato" type="text" placeholder="Formato fecha"></input>
      </p>
      <p>
        <select ref={el => this.textInitYear = el as HTMLSelectElement } id="initYear" onChange={(e)=>this.deleteInitialMonth(e)}>
          { this.years.map((year)=>
            <option value={year}>{year}</option>
          )}
        </select>
        &nbsp;
        <select ref={el => this.textInitMonth = el as HTMLSelectElement } disabled={true} onChange={(e)=>this.deleteInitialDay(e)} id="initMonth" name= "mon">
          { this.months.map((month)=>
            <option value={this.months.indexOf(month)+1}>{month}</option>
          )}
        </select>
        &nbsp;
        <select ref={el => this.textInitDay = el as HTMLSelectElement } disabled={true} onChange={(e)=>this.deleteEndYear(e)} id="initDay">
          { this.days.map((day)=>
            <option value={day}>{day}</option>
          )}
        </select>
        &nbsp;
        &nbsp;
        <input ref={el => this.initialDateLabel = el as HTMLInputElement } type="text" readOnly={true}></input>
      </p>
      <p>
        <select ref={el => this.textEndYear = el as HTMLSelectElement } disabled={true} onChange={(e)=>this.deleteEndMonth(e)} id="endYear">
          { this.years.map((year)=>
            <option value={year}>{year}</option>
          )}
        </select>
        &nbsp;
        <select ref={el => this.textEndMonth = el as HTMLSelectElement } disabled={true} onChange={(e)=>this.deleteEndDay(e)} id="endMonth">
          { this.months.map((month)=>
            <option value={this.months.indexOf(month)+1}>{month}</option>
          )}
        </select>
        &nbsp;
        <select ref={el => this.textEndDay = el as HTMLSelectElement } disabled={true} onChange={(e)=>this.executeLastValidation(e)} id="endDay">
          { this.days.map((day)=>
            <option value={day}>{day}</option>
          )}
        </select>
        &nbsp;
        &nbsp;
        <input ref={el => this.finalDateLabel = el as HTMLInputElement } type="text" readOnly={true}></input>
      </p>
    </div>)
  }
}
