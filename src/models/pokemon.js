export default class Pokemon {
    img_url = null;
    real_name = '';
    nickname = '';
    pokemon_id = null;
    lvl = 1;
    location = '';
    types = null;
    stats = null;
    evolutions = [];
    party = -1;
    caught = Date.now();
    death = null;
    id = null;
    
    get object() {
        return Object.assign({}, this);
    }

    setValuesFromApiResultSet(realName, imgUrl, pokeId, stats, types) {
        this.real_name = realName;
        this.img_url = imgUrl;
        this.pokemon_id = pokeId;
        this.stats = stats.map(s => {
          return {
            name: s.stat.name,
            val: s.base_stat
          };
        });
        this.types = types.map(t => {
            return t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
        });
    }
}