
const arrayOggetti = [
    
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        picture : 'wayne-barnett-founder-ceo.jpg',
    },
    
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        picture : 'angela-caroll-chief-editor.jpg',
    },
    
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        picture : 'walter-gordon-office-manager.jpg',
    },
    
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        picture : 'angela-lopez-social-media-manager.jpg',
    },
    
    {
        name : 'Scott Estrada',
        role : 'Developer',
        picture : 'scott-estrada-developer.jpg',
    },
    
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        picture : 'barbara-ramos-graphic-designer.jpg',
    }
]

for (let i = 0; i < arrayOggetti.length; i++){
    console.group();
    console.log(arrayOggetti[i].name);
    console.log(arrayOggetti[i].role);
    console.log(arrayOggetti[i].picture);
    
    console.groupEnd();
}