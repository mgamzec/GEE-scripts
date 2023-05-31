var image=ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
 .filterDate('2022-06-01','2022-09-30')
 .filter('CLOUD_COVER<10')
 .select('SR_B4', 'SR_B3', 'SR_B2')
 .filterBounds(ant_merkez)
print(image)

Map.addLayer(ant_merkez,"",'Antalya Merkez')
Map.addLayer(image.mean(),"",'RGB')
Map.centerObject(ant_merkez)

/*Export.image.toDrive({
 image:image.mean(),
 description:'landsatAntalya',
 scale:30,
 region:ant_merkez
})
