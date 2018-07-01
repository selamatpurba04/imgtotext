let start = ( resText ) => {
	
	var text = resText.replace(/(?:\r\n|\r|\n)/g, " ")

	//region provinsi
	var mProvinsi = text.match(/PROVINSI(.*)KABUPATEN/)
	var propinsi = mProvinsi != null ? mProvinsi[1].trim() : null

	//region kabupaten
	var mKabupaten = text.match(/KABUPATEN\s\w*\s\w*/)
	var kabupaten = mKabupaten != null ? mKabupaten[0].trim() : null

	//region nik
	var mNik = text.match(/[0-9]{16}/)
	var nik = mNik != null ? mNik[0] : null

	//region nama
	var mNama = text.match(/Nama.{3}((\w+\s+){3})/)
	var nama = mNama != null ? mNama[1].trim() : null

	//region tempat / tgl lahir
	var mTempatTglLahir = text.match(/Lahir.{3}(\w+),\s((\d{2})\-(\d{2})\-(\d{4}))/)
	var tempatLahir , dayTglLahir , monthTglLahir , yearTglLahir, tglLahir = null
	if ( mTempatTglLahir != null ){
		tempatLahir =  mTempatTglLahir[1].trim() 
		dayTglLahir = mTempatTglLahir[3].trim() 
		monthTglLahir = mTempatTglLahir[4].trim() 
		yearTglLahir = mTempatTglLahir[5].trim()
		tglLahir = new Date( yearTglLahir + "-" + monthTglLahir + "-" + dayTglLahir )
	}
  
	//region jenis kelamin
	var mJenisKelamin = text.match(/Kelamin.{3}(LAKI\-LAKI|PEREMPUAN)/)
	var jenisKelamin = mJenisKelamin != null ? mJenisKelamin[1].trim() : null

	//region gol darah
	var mGolDarah = text.match(/Darah.{3}(.{2})/)
	var golDarah = mGolDarah != null ? mGolDarah[1].trim() : null

	//region alamat
	var mAlamat = text.match(/Alamat.{3}(.*)RT/)
	var alamat = mAlamat != null ? mAlamat[1].trim() : null

	//region rt rw
	var mRtRw = text.match(/RW.{2}(\d{3}).{2}(\d{3})/)
	var rt = mRtRw != null ? mRtRw[1].trim() : null
	var rw = mRtRw != null ? mRtRw[2].trim() : null

	//region kel/Desa
	var mKelurahanDesa = text.match(/Desa.{3}(\w+)/)
	var kelurahanDesa = mKelurahanDesa != null ? mKelurahanDesa[1].trim() : null

	//region kecamatan
	var mKecamatan = text.match(/camatan.{3}(\w+)/)
	var kecamatan = mKecamatan != null ? mKecamatan[1].trim() : null

	//region agama
	var mAgama = text.match(/Agama.{3}(\w+)/)
	var agama = mAgama != null ? mAgama[1].trim() : null

	//region Status Perkawinan
	var mPerkawinan = text.match(/kawinan.{2}(BELUM KAWIN|KAWIN)/)
	var perkawinan = mPerkawinan != null ? mPerkawinan[1].trim() : null

	//region Pekerjaan
	var mPekerjaan = text.match(/kerjaan.{3}(.*)Kewarganegaraan/)
	var pekerjaan = mPekerjaan != null ? mPekerjaan[1].trim() : null

	//region Kewarganegaraan
	var mKewarganegaraan = text.match(/negaraan.{2}(WNI|WNA)/)
	var kewarganegaraan = mKewarganegaraan != null ? mKewarganegaraan[1].trim() : null

	//region Berlaku Hingga
	var mTglBerlakuHingga = text.match(/Hingga.{3}((\d{2})\-(\d{2})\-(\d{4}))/)
	var dayTglBerlakuHingga, monthTglBerlakuHingga, yearTglBerlakuHingga, tglBerlakuHingga = null
	if ( mTglBerlakuHingga != null ){
		dayTglBerlakuHingga = mTglBerlakuHingga[2].trim() 
		monthTglBerlakuHingga = mTglBerlakuHingga[3].trim() 
		yearTglBerlakuHingga = mTglBerlakuHingga[4].trim()
		tglBerlakuHingga = new Date( yearTglBerlakuHingga + "-" + monthTglBerlakuHingga + "-" + dayTglBerlakuHingga )
	}

	//region tempat peresmian
	var mTempatPeresmian = text.match(/Hingga.{3}\d{2}\-\d{2}\-\d{4}.(\w+)/)
	var tempatPeresmian = mTempatPeresmian != null ? mTempatPeresmian[1].trim() : null

	//region tanggal peresmian
	var mTglPeresmian = text.match(/Hingga.{3}\d{2}\-\d{2}\-\d{4}.\w+\s((\d{2})\-(\d{2})\-(\d{4}))/)
	var tglPeresmian = mTglPeresmian != null ? mTglPeresmian[1].trim() : null
	var dayTglPeresmian, monthTglPeresmian, yearTglPeresmian, tglPeresmian = null
	if ( mTglPeresmian != null ){
		dayTglPeresmian = mTglPeresmian[2].trim() 
		monthTglPeresmian = mTglPeresmian[3].trim()
		yearTglPeresmian = mTglPeresmian[4].trim()
		tglPeresmian = new Date( yearTglPeresmian + "-" + monthTglPeresmian + "-" + dayTglPeresmian )
	}

	return {
		propinsi : propinsi,
		kabupaten : kabupaten,
		nik : nik,
		nama : nama,
		tempatLahir : tempatLahir,
		tglLahir : tglLahir,
		jenisKelamin : jenisKelamin,
		golDarah : golDarah,
		alamat : alamat,
		rt : rt,
		rw : rw,
		kelurahanDesa : kelurahanDesa,
		kecamatan : kecamatan,
		agama : agama,
		perkawinan : perkawinan,
		pekerjaan : pekerjaan,
		kewarganegaraan : kewarganegaraan,
		tglBerlakuHingga : tglBerlakuHingga,
		tempatPeresmian : tempatPeresmian,
		tglPeresmian : tglPeresmian
	}

}

module.exports.start = start