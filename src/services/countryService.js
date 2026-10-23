const url = "https://api.restcountries.com/countries/v5";

export async function obtener_paises() {
    const response = await fetch(url, {
        headers: {
            Authorization: "Bearer rc_live_ae18210221624d7580de38af1b715a6a"
        }
    });
    const datos = await response.json();
    return datos.data.objects;
}

obtener_paises().then(paises => {
    console.log("Total de países:", paises.length);
    console.log("Primer país:", paises[0].names.common);
});