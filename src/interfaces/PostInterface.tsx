export default interface PostInterface {
  postId: string; 
  title: string;
  author: string; 
  comments: Comment[]
}

export type Comment = {
  id: number;
  text: string;
};