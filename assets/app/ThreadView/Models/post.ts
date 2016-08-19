export class Post {
    constructor(
        public id: Date, 
        public author: string, 
        public body: string,
        public dateCreated: Date,
        public createdBy: string
        ){}
}