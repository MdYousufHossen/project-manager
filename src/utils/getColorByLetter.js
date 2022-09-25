const getColorByLatter=(letter)=>{
        const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        const colors = [
            { id:1,text:"text-yellow-500",bg:"bg-yellow-100"},
             {id:2, text:"text-red-500",bg:"bg-red-100"},
             { id:3, text:"text-orange-500",bg:"bg-orange-100"},
             { id:4,text:"text-pink-500",bg:"bg-pink-100"},
             { id:5,text:"text-amber-500",bg:"bg-amber-100"},
             { id:6, text:"text-lime-500",bg:"bg-lime-100"},
             { id:7,text:"text-sky-500",bg:"bg-sky-100"},
             { id:8,text:"text-blue-500",bg:"bg-indigo-100"},
             { id:9,text:"text-violet-500",bg:"bg-violet-100"},
             { id:10,text:"text-purple-500",bg:"bg-purple-100"},
             { id:11,text:"text-neutral-500",bg:"bg-neutral-100"},
             { id:12,text:"text-stone-500",bg:"bg-stone-100"},
             { id:13,text:"text-fuchsia-500",bg:"bg-fuchsia-100"},
             { id:14,text:"text-rose-500",bg:"bg-rose-100"},
            { id:15,text:"text-yellow-500",bg:"bg-yellow-100"},
             {id:16, text:"text-red-500",bg:"bg-red-100"},
             { id:17, text:"text-orange-500",bg:"bg-orange-100"},
             { id:18,text:"text-pink-500",bg:"bg-pink-100"},
             { id:19,text:"text-amber-500",bg:"bg-amber-100"},
             { id:20, text:"text-lime-500",bg:"bg-lime-100"},
             { id:21,text:"text-sky-500",bg:"bg-sky-100"},
             { id:22,text:"text-blue-500",bg:"bg-indigo-100"},
             { id:23,text:"text-violet-500",bg:"bg-violet-100"},
             { id:24,text:"text-purple-500",bg:"bg-purple-100"},
             { id:25,text:"text-neutral-500",bg:"bg-neutral-100"},
             { id:26,text:"text-stone-500",bg:"bg-stone-100"}
             ]
        let upperLetter = letter.toUpperCase();
        return colors[alphabets.indexOf(upperLetter)];
}
export default getColorByLatter