const tape = require("tape");
const dijkstra = require("../build/dijkstra");
const construct_adjacency_list = require("../../ch3/build/construct_adjacency_list");
tape("explore", ((test) => {
    let al = construct_adjacency_list(['ABC', 'BCDE', 'CBDE', 'D', 'ED']);
    let el = construct_adjacency_list(['A42', 'B323', 'C145', 'D', 'E1']);
    
    test.deepEqual(dijkstra(al, el, 'A'), {"A":0,"B":3,"C":2,"D":5,"E":6});
    test.end();
}));