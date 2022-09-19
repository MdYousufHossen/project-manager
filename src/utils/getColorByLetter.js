const getColorByLatter=(letter)=>{
        const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        const colors = ['yellow', 'red', 'orange', 'pink', 'amber',
            'lime', 'green', 'emerald', 'teal', 'cyan',
            'sky', 'blue', 'indigo', 'violet', 'purple',
            'fuchsia', 'rose', 'pink', 'red', 'yellow',
            'neutral', 'stone', 'teal', 'sky', 'green',
            'zinc', 'gray']
        let upperLetter = letter.toUpperCase();
        return colors[alphabets.indexOf(upperLetter)];
}
export default getColorByLatter