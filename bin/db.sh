
db="upstar_music"
flags="--quiet --eval"

for col in artists
do
	echo "===> ${col}"
	cmd="printjson(db.${col}.find().toArray())"
	# echo $cmd
	mongo ${flags} ${cmd} "${db}"
done
