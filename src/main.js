import * as d3 from 'd3';
import Module from '../wasm/build/solarSystem';

async function main() {
  const wasmModule = await Module();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const svg = d3.select('#solar-system')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  console.log(wasmModule._add(1, 2));  // Try accessing through the module
  // Your D3 code for the solar system goes here
}

main();
