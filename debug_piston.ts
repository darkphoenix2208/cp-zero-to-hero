
import { executeCode } from './lib/piston';

async function main() {
    const code = `
#include <iostream>
using namespace std;
int main() {
    int t;
    cin >> t;
    cout << t * 2 << endl;
    return 0;
}
    `;
    const inputs = ["10", "5"];

    console.log("Testing Piston...");
    try {
        const results = await executeCode('cpp', code, inputs);
        console.log("Results:", JSON.stringify(results, null, 2));
    } catch (e) {
        console.error("Debug Script Error:", e);
    }
}

main();
