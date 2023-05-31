import db from "./firebase"
import { collection, getDocs, query, where } from "./firebase"

interface Post {
    id: string,
    Title: string,
    Content: string
}

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
                Content: p.data().Content
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
        querySnapshot.forEach((post) => {
            posts.push({
                id: post.id,
                Title: post.data().Title,
                Content: post.data().Content
             })
        })
        return resolve(posts)
    } catch (error) {
        reject(error)
    }
})

export { getPost, getPosts }