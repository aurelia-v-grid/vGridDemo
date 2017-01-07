import { GridConnector } from 'aurelia-v-grid';
import { DataSource } from 'aurelia-v-grid';
import { Selection } from 'aurelia-v-grid';
import {DummyDataGenerator} from './data/dummyDataGenerator';

export class App {
  constructor() {
    this.message = 'Simple demo';
    
    //dummy data
    this.collection = []
    this.dummyDataGenerator = new DummyDataGenerator();

    this.dummyDataGenerator.generateData(500, (data) => {
      this.collection = data;
    });    

    // create datasource (you could just inject this from somewhere else)
    this.ds = new DataSource(new Selection('multiple'));

    //create grid connector
    this.gridConnector = new GridConnector(this.ds);

    // set data to the datasource, you dont need to set data now, you can do it later...
     this.ds.setArray(this.collection);
  }

  replace(x){
    this.dummyDataGenerator.generateData(x, (data) => {
      this.collection = data;
    });   
    this.ds.setArray(this.collection);
  }

  add(x){
    this.dummyDataGenerator.generateData(x, (data) => {
      this.ds.addRows(data);
    });   
    
  }

}
