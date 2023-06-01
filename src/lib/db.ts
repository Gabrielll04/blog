import db from "./firebase"
import { collection, getDocs, query, where } from "./firebase"
import { Post } from "./models"

const getPost = (postTitle: string) => new Promise(async (resolve, reject) => {
    try {
        const docRef = collection(db, "posts")
        const q =  query(docRef, where("Title", "==", postTitle))
        const post: Post[] = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((p) => {
            post.push({
                id: p.id,
                Title: p.data().Title,
                Content: p.data().Content,
                Topics: p.data().Topics,
                CreatedAt: p.data().CreatedAt
            })
        })
        return resolve(post)
    } catch (error) {
        return reject(error)
    }
}) 

const getPosts = () => new Promise(async (resolve, reject) => {
    try {
        const docRef = collection(db, "posts")
        const posts: Post[] = []
        const querySnapshot = await getDocs(docRef)
        querySnapshot.forEach((p) => {
            posts.push({
                id: p.id,
                Title: p.data().Title,
                Content: p.data().Content,
                Topics: p.data().Topics,
                CreatedAt: p.data().CreatedAt
             })
        })
        return resolve(posts)
    } catch (error) {
        reject(error)
    }
})

export { getPost, getPosts }