import { Component, OnInit } from '@angular/core';
import * as dracula from 'graphdracula';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  graph: dracula.Graph;
  renderer: dracula.Renderer.Raphael;
  layout: dracula.Layout.Spring;

  constructor() { }

  ngOnInit(): void {
    const Graph = dracula.Graph;
    const Renderer = dracula.Renderer.Raphael;
    const Layout = dracula.Layout.Spring;

    this.graph = new Graph();

    this.graph.addNode('San Jose');
    this.graph.addNode('Heredia');
    this.graph.addNode('Cartago');

    this.addEdge('San Jose','Heredia', 14);


    
    this.renderer = new Renderer('#paper', this.graph, 1200, 600);
    this.layout = new Layout(this.graph);
    this.renderer.draw();
  }

  addEdge(from, to, weight){
    const edgeData = {
      "weight": weight,
      "label": weight,
      "stoke": "#56f",
      "font-size": "18px"
    }

    this.graph.addEdge(from,to,edgeData);
  }

}
