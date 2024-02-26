import { faker } from '@faker-js/faker';


function createPost (){
  return (
    {
      title:faker.lorem.word(),
      desc:faker.lorem.sentences(),
      companyName:faker.company.name(),
      companyPlace:faker.location.city(),
      date:faker.date.between({from:"2024-06-01",to:"2024-09-19"}),
      img:faker.image.urlPicsumPhotos()
    }
  )
}

let posts= []


for(let i = 0 ; i<10;i++){
   posts.push( createPost())
}

export default posts