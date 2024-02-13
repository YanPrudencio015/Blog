import { SUBJECTS } from "./Subjects";


const POSTIMAGE =[
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*QJCB-X96WUotQdk6',
    "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*oLsyg1boKDdrQcVr",
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*h2Tl5Cw1lkIGK6mzCCCybg.jpeg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Bcxwe7y-T2ndwxeel41Vng.png',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*fMr9IS33F2oXYLb9BjxjtA.jpeg',
    'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*LFxNg0_rVGvGWk7uqprSDw.jpeg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*VQVZpw4_Imz218H1.jpeg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*L2Hb8AQ9J6wUIdKI',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*_F7Gydc-d3GTsH8R',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*LvvTPRUIU_9Jqlg0DHkpwg.png',
    'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AsnXNTS4TD1mvOF6alCQOA.png',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*ZYWga-T_NTLMNa9d',
]






function generateId() {

  const number = Math.floor(Math.random()*1000)
  return number;
}









function Sobjects(){

  const  sub1 = Math.floor(Math.random() * SUBJECTS.length)

    let theme1 = SUBJECTS[sub1];

    return theme1;


  }









export const POSTS = [
    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[0],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[1],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[2],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[3],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[4],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[5],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },
    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[6],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[7],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[8],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[9],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[10],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },

    {
      id: generateId(),
      author: "User Name",
      image:POSTIMAGE[11],
      postCast1: Sobjects(), 
      postCast2: Sobjects(), 
      postTitle: "PostTitle",
      postDate: "1 Hour Ago",
      postDesc: `Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more 
        recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.`,
    },
  ];