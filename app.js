/**
 * Created by hoangtle on 11/29/2016.
 */
var cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        // nodes
        {data: {id: 'a'}},
        {data: {id: 'b'}},
        {data: {id: 'c'}},
        {data: {id: 'd'}},
        {data: {id: 'e'}},
        {data: {id: 'f'}},
        // edges
        {
            data: {
                id: 'ab',
                source: 'a',
                target: 'b'
            }
        },
        {
            data: {
                id: 'cd',
                source: 'c',
                target: 'd'
            }
        },
        {
            data: {
                id: 'ef',
                source: 'e',
                target: 'f'
            }
        },
        {
            data: {
                id: 'ac',
                source: 'a',
                target: 'd'
            }
        },
        {
            data: {
                id: 'be',
                source: 'b',
                target: 'e'
            }
        }
    ],
    style: [
        {
            selector: 'node',
            style: {
                /*shape: 'rectangle',*/
                'background-color': 'red',
                label: 'data(id)'
            }
        },
        {
            selector: 'edge',
            style: {
                'target-arrow-shape': 'triangle',
                'line-color': '#9dbaea',
                'target-arrow-color': '#9dbaea',
                'curve-style': 'bezier'
            }
        }
    ],
    layout: {
        name: 'circle'
    }
});

for (var i = 0; i < 5; i++) {
    cy.add({
        data: {id: 'node' + i}
    });
    var source = 'node' + i;
    cy.add({
        data: {
            id: 'edge' + i,
            source: source,
            target: (i % 2 == 0 ? 'a' : 'b')
        }
    });
}

cy.layout({name: 'circle'});

console.log(JSON.stringify(cy.json()));
