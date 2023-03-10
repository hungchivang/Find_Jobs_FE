import {Role} from "./Role";
import {Category} from "./Category";

export class Company{
  id:number;
  name:string;
  shortName:string;
  code:string;
  email:string;
  password:string;
  avatar:string;
  description:string;
  address:string;
  numberOfEmployees:number;
  googleMap:string;
  tel:string;
  website:string;
  status:boolean;
  banner:string;
  role:Role;
  category:Category;


  constructor(id: number, name: string, shortName: string, code: string, email: string, password: string, avatar: string, description: string, address: string, numberOfEmployees: number, googleMap: string, tel: string, website: string, status: boolean, banner: string, role: Role, category: Category) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.code = code;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.description = description;
    this.address = address;
    this.numberOfEmployees = numberOfEmployees;
    this.googleMap = googleMap;
    this.tel = tel;
    this.website = website;
    this.status = status;
    this.banner = banner;
    this.role = role;
    this.category = category;
  }
}
