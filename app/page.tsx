"use client";

import React, {Component} from "react";
import {arrayGenerator} from "@/app/_utils/arrayGenerator";
import SortingContainer from "@/app/_components/SortingContainer/SortingContainer";
import NavBar from "@/app/_components/NavBar/NavBar";

interface sortingState {
  nBars: number;
  array: number[];
  nCompare: number;
  stage: React.Ref<SortingContainer>[]
}

export default class Sorting extends Component {

  state: sortingState = {
    nBars: 10,
    array: [],
    nCompare: 1,
    stage: [],
  };


  generateStages = () => {
    let stages = [];
    for (let i = 0; i < this.state.nCompare; i++) {
      stages.push(React.createRef<SortingContainer>());
    }
    return stages;
  };


  componentDidMount() {
    const arr = arrayGenerator(this.state.nBars);
    let stages = this.generateStages();
    this.setState({
      ...this.state,
      array: arr,
      stage: stages,
    });
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<sortingState>, snapshot?: any) {
    if (prevState.nCompare !== this.state.nCompare) {
      let stages = this.generateStages();
      this.setState({stage: stages});
    }
    console.log('changed')
  }

  handleComparisonChange = (num: number) => {
    this.setState({
      ...this.state,
      nCompare: num
    });
  };

  handleRandomize = () => {
    let arr = arrayGenerator(this.state.nBars);
    this.setState({
      array: arr,
    })
    for (let i = 0; i < this.state.nCompare; i++) {
      const child = this.state.stage[i];
      if (child && 'current' in child && child.current) {
        child.current.generateBars(arr);
      }
    }
  };

  handleStart = () => {
    for (let i = 0; i < this.state.nCompare; i++) {
      const child = this.state.stage[i];
      if (child && 'current' in child && child.current) {
        console.log('starting');
        child.current.start().then(() => console.log('started'));
      }
    }
  }

  handleNBarsChange = (num: number) => {
    this.setState({
      ...this.state,
      nBars: num
    }, () => {
      this.handleRandomize();
    });
  }

  generateRandom = () => {
    const nBars = this.state.nBars;
    this.setState({
      array: arrayGenerator(nBars),
    });
  };

  render() {
    let stages = this.state.stage.map((stage, index) => (
        <div
            key={index}
            className="w-full bg-gray-100 border border-gray-200 rounded-md shadow-sm p-4"
        >
          <SortingContainer
              ref={stage}
              barCount={this.state.nBars}
              initialArray={this.state.array}
              comparisons={this.state.nCompare}
              handleChangeVisualizingState={() => {
              }}
          />
        </div>
    ));

    return (
        <main className="bg-white min-h-screen">
          <NavBar
              generateRandom={this.generateRandom}
              handleStart={this.handleStart}
              handleComparisonChange={this.handleComparisonChange}
              handleNBarsChange={this.handleNBarsChange}
          />

          <div className="flex justify-center items-start py-10">
            <div className="flex flex-col items-center w-3/4 space-y-6">
              {stages}
            </div>
          </div>
        </main>
    );

  }
}