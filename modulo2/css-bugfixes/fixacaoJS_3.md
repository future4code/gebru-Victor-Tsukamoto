```function calculaNota(ex, p1, p2) {

    const nota = ((ex) + (p1 * 2) + (p2 * 3)) / 6

    if (nota >= 9) {
        console.log("A")
    } else if (nota >= 7.5) {
        console.log("B")
    } else if (nota >= 6) {
        console.log("C")
    } else if (nota < 6) {
        console.log("D")
    }
    
} ```