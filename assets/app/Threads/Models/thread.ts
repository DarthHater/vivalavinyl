export class Thread {
    constructor(
        public id: Date, 
        public author: string, 
        public title: string,
        public dateUpdated: Date,
        public numberOfPosts: int,
        public dateCreated: Date,
        public createdBy: string,
        public updatedBy: string
        ){}
}