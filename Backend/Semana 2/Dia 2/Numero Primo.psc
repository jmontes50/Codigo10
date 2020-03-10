Algoritmo primo
	Escribir  "Ingrese un numero"
	Leer num
	base <- 1
	si num ==1 Entonces
		Escribir "Es primo"
	SiNo
		mientras base<num Hacer
			si num%base ==0 Entonces
				contador<-contador+1
			FinSi
			base<-base+1
		FinMientras
		Escribir contador
		si contador>1 Entonces
			Escribir num,' no es primo'
		SiNo			
			Escribir num,' es primo'
		FinSi
	FinSi	
FinAlgoritmo
