import {writable} from 'svelte/store';

const meetups = writable([
    {
        id: 'm1',
        title: 'Persona4r meetup' ,
        subtitle: 'Learn to play in 2 hours' ,
        description: 'In this meetup, we will have some experts like chie',
        imageUrl: 'https://i.redd.it/185xihbktbn21.jpg',
        contactEmail: 'code@test.com',
        adress: 'Nerd Street 420, 9696 Jeruzalem',
        isFavorite: false
      },
      {
        id: 'm2',
        title: 'Persona5r meetup' ,
        subtitle: 'Learn to play in 4 hours' ,
        description: 'In this meetup, we will have some experts like Joker',
        imageUrl: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000',
        contactEmail: 'code@test.com',
        adress: 'Epic Straat 6969, 9000 Belgium',
        isFavorite: false
      }
]);

const customMeetupsStore =  {

    subscribe: meetups.subscribe,
        addMeetup: (meetupData) => {
          const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
          };
          meetups.update(items => {
            return [newMeetup, ...items];
          });
        },


      toggleFavorite: id => {
          meetups.update(items => {
            const meetupIndex = items.findIndex(m => m.id === id);
            if (meetupIndex === -1) return items; // If the item isn't found, do nothing
        
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = {
              ...updatedMeetups[meetupIndex],
              isFavorite: !updatedMeetups[meetupIndex].isFavorite
            };
        
            return updatedMeetups;
          });
      }
  }
export default customMeetupsStore;