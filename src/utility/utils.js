export const PATHS = {
    HOME: () => '/',
    WORK: (id = undefined) => id ? `/work/${id}` : '/work',
    ART: (id = undefined) => id ? `/art/${id}` : '/art',
};

export const importArt = (r) => {
    let reCompressed = /.\/c/; // Regex to determine c-prefix of compressed image
    let reIndex = /\D/g;
    let images = [];
    r.keys().forEach((key, i) => {
      if (reCompressed.test(key)) { // Finds & matches compressed image (c-prefix) with corresponding original
        let compressedMatch = key.replace('c', '');
        let match = images.find(img => img.pathShort === compressedMatch);
        if (match) match['compressed'] = { pathLong: r(key), pathShort: key};
      } else {
        let filteredKey = parseInt(key.replace(reIndex, ''));
        images.push({ pathLong: r(key), pathShort: key, id: filteredKey })
      }
    });
    return images.sort((x, y) => (x.id > y.id ? 1 : -1));
};