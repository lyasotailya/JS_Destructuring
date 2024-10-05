export function getSpecial(dict) {
    let newDict = []
    if ( dict.hasOwnProperty('special') ) {
        for (let item of dict['special'] ) {
            const {id, name, icon, description = "Описание недоступно"} = item
            newDict.push({'id': id, 'name': name, 'icon': icon, 'description': description})
        }
        return newDict
    } else {
        return "Специальности недоступны"
    }
}
