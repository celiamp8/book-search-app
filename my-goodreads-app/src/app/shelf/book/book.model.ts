export class Book {
  public id: string;
  public title: string;
  public author: string;
  public description: string;
  public pageCount: number;
  public cover: string;

  constructor(id: string, title: string, author: string, description: string, pageCount: number, cover: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.pageCount = pageCount;
    this.cover = cover;
  }
}
