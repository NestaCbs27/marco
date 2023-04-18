const TABLE_PLACES = 'PLACES';

const firebaseConfig = {
    apiKey: "AIzaSyCdlqLvlYsE54ZJC9jQi6VZGjIN-lOtsGg",
    authDomain: "ottdog-70d9f.firebaseapp.com",
    projectId: "ottdog-70d9f",
    storageBucket: "ottdog-70d9f.appspot.com",
    messagingSenderId: "575766865141",
    appId: "1:575766865141:web:5d47e9e0bdcf58e80a11bc"
};

function updatePlaceById(ref,db,update,id){
    update(ref(db,TABLE_PLACES+"/"+id),{
        id:id,
        placeName: $('#name'+id).val(),
        placeCity:$('#city'+id).val()
    }).then(() => {
        alert('OK')
    }).catch((error) => {
        alert('OK')
    })
};

function getAllPlacesAdmin(ref,db,get,child){
    const dbr = ref(db);
    get(child(dbr,TABLE_PLACES)).then((res) => {
        res.forEach((p) => {
            $("#name"+p.val().id).val(p.val().placeName);
            $("#city"+p.val().id).val(p.val().placeCity);
            $('#loaderPlaces').addClass('hidden');
            $('#tablePlaces').removeClass('hidden');
        })
    })
    .catch((error) => {
        alert(error)
    })
};

function diplayAdmin(){
    $('#consumers').addClass('hidden');
    $('#administrator').removeClass('hidden');

}