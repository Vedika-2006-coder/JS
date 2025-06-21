// how javascript is executed ?

const { useContext } = require("react")

/// Topic 1-Execution context -how code is executed i.e how it is divided into two parts
/// Topic 2-calls stack -which function should go in memory ,how it is executed and how to come out of that memory

// JAVASCRIPT EXECUTION CONTEXT
// means how js will run your file 
// js will run your program in two phases
// javascript is  single threaded , in js every thing  is a process


// EXECUTION CONTEXTS
// 1.Global execution Context
// 2.Function execution Context
// 3.Eval execution Context

// TWO PHASES
// Memmory creation phase- the location is allocated to the variables,... // i.e memory allocation is there
// Execution phase-Mathematical functions are executed i.e +,-,..

// 1) Global execution -Every code is first run with global execution , and is allocated in this 
// 2) Memory Phase-All the vriables are collected and placed
// val1->undefined
// val2->undefined
// addNum->function definition
// result1->undefined
// result2->undefined

// 3) Execution Phase
// val1->10
// val2->5
// here addNum is function so addNum creates a different execution context, and in this context 