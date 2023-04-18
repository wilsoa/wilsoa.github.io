var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var bigrams = [];

for (i = 0; i < alphabet.length; i++) {
    for (j = 0; j < alphabet.length; j++) {
        bigrams.push(alphabet[i] + alphabet[j]);
    }
}

var ciphertext = document.getElementById("ciphertext");
var frequencies = document.getElementById("frequencies");
var guesserror = document.getElementById("guesserror");
var clear_guess = document.getElementById("clear-guess");
var bigram_frequencies = document.getElementById("bigram-frequencies");

function persistInput(input)
{
  var key = "input-" + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
      input.value = storedValue;

  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}

function analyze_frequencies () {
    var text = ciphertext.value.toUpperCase();
    var counts = {};
    var bigram_counts = {};
    
    // Count single letters
    for (i = 0; i < alphabet.length; i++) {
        counts[alphabet[i]] = 0;
        for (j = 0; j < text.length; j++) {
            if (text[j] == alphabet[i]) {
                counts[text[j]] += 1;
            }
        }
    }
    
    // Count bigrams
    for (i = 0; i < bigrams.length; i++) {
        bigram_counts[bigrams[i]] = 0;
        for (j = 0; j < text.length - 1; j++){
            if (text[j] == bigrams[i][0] && text[j + 1] == bigrams[i][1]) {
                bigram_counts[bigrams[i]] += 1;
            }
        }
    }
    
    var sortedalphabet = alphabet.split("");
    
    sortedalphabet.sort(function(a, b){
        return counts[b] - counts[a];
    });
    
    bigrams.sort(function(a, b) {
        return bigram_counts[b] - bigram_counts[a];
    });
    
    var output = "<tr>";
    
    for (i = 0; i < sortedalphabet.length; i++) {
        output += "<td><b>" + sortedalphabet[i] + "</b></td>";
    }
    
    output += "</tr><tr>";
    
    for (i = 0; i < sortedalphabet.length; i++) {
        if (text.length == 0) {
            output += "<td>0%</td>";
        }
        else{
                output += "<td>" + Math.floor(counts[sortedalphabet[i]] / text.length * 100) + "%</td>";
            }
    }
    
    frequencies.innerHTML = output + "</tr>"
    
    var bigram_output = "<tr>";
    
    for (i = 0; i < 13; i++) {
        bigram_output += "<td><b>" + bigrams[i] + "</b></td>";
    }
    
    bigram_output += "<td>...</td></tr><tr>";
    
    for (i = 0; i < 13; i++) {
        if (text.length < 2) {
            bigram_output += "<td>0%</td>"
        }
        else {
            bigram_output += "<td>" + Math.floor(bigram_counts[bigrams[i]] / (text.length - 1) * 1000) / 10 + "%</td>";
        }
    }
    
    bigram_frequencies.innerHTML = bigram_output + "<td>...</td></tr>"
}

var guesses = [];
var guessoutput = document.getElementById("guessoutput");

for (i = 0; i < alphabet.length; i++) {
    guesses[i] = document.getElementById("guess" + alphabet[i]);
    persistInput(guesses[i]);
}

function generate_guess () {
    var text = ciphertext.value.toUpperCase();
    
    for (i = 0; i < alphabet.length; i++) {
        if (guesses[i].value) {
            text = text.replace(new RegExp(alphabet[i], "g"), "<b>" + guesses[i].value + "</b>");
        }
    }
    
    guessoutput.innerHTML = text;
}

function validate_guesses () {
    var invalid = false;
    var message = "";
    var accounted_for = {};
    
    for (i = 0; i < alphabet.length; i++) {
        guesses[i].classList.remove("invalid");
        
        if (guesses[i].value.length > 1) {
            guesses[i].classList.add("invalid");
            invalid = true;
            message = "Guesses should be single letters";
        }
        else if (guesses[i].value.length > 0 && accounted_for[guesses[i].value] != undefined) {
            guesses[i].classList.add("invalid");
            guesses[accounted_for[guesses[i].value]].classList.add("invalid");
            invalid = true;
            message = "There should be no repeats in guesses."
        }
        
        accounted_for[guesses[i].value] = i;
    }
    
    guesserror.innerHTML = message;
    
    return invalid;
}

for (i = 0; i < alphabet.length; i++) {
    guesses[i].oninput = function () {
        this.value = this.value.toLowerCase();
        localStorage.setItem("input-" + this.id, this.value);
        if (!validate_guesses()) {
            generate_guess();
        }
    }
}

ciphertext.oninput = function () {
    analyze_frequencies();
    generate_guess();
}


persistInput(ciphertext);
analyze_frequencies();
if (!validate_guesses()) {
    generate_guess();
}

clear_guess.onclick = function () {
    for (i = 0; i < alphabet.length; i++) {
        guesses[i].value = "";
        localStorage.setItem("input-" + guesses[i].id, "");
    }
    generate_guess();
}


var samples = ["Pq qph sqtya idxh fhyohxha op cih ydnc lhdbn qw cih pophchhpci ghpctbl cidc cion sqbya sdn fhope sdcgiha mhhpyl dpa gyqnhyl fl opchyyoehpghn ebhdchb cidp kdp'n dpa lhc dn kqbcdy dn ion qsp; cidc dn khp ftnoha cihknhyxhn dfqtc cihob xdboqtn gqpghbpn cihl shbh ngbtcoponha dpa nctaoha, zhbidzn dykqnc dn pdbbqsyl dn d kdp soci d kogbqngqzh koeic ngbtcoponh cih cbdpnohpc gbhdctbhn cidc nsdbk dpa ktycozyl op d abqz qw sdchb.".toUpperCase(), "VNY ITQVPZIY QIRGPZVYK TDKYW VNY CWYYD PZW QD VNY LZWH. VNY PZIY PZD AY GLYDYKMQVN VNY PGKY RGPZVYK TDKYW Z OTWZR GJ Z PZV. FGT DYYK VG AYPZWYJTR ZI YDYOF ILQYI OZF AY MZVPNQDC. HYYL ZDFVNQDC QD VNY PZIYNQKKYD TDVQR MY OYYV AZPH TL NYWY ZV VYD VGOGWWGM.", "Gw ge q atigfp fn cgmgz yqi. Itktz eaqctelgae, ewigjgdv nifx q lgpptd kqet, lqmt yfd wltgi ngiew mgcwfio qvqgdew wlt tmgz Vqzqcwgc Txagit. Prigdv wlt kqwwzt, Itktz eagte xqdqvtp wf ewtqz etcitw azqde wf wlt Txagit'e rzwgxqwt ytqafd, wlt PTQWL EWQI, qd qixfitp eaqct ewqwgfd ygwl tdfrvl afyti wf ptewifo qd tdwgit azqdtw. Ariertp ko wlt Txagit'e egdgewti qvtdwe, Aigdctee Ztgq iqcte lfxt qkfqip lti ewqielga, crewfpgqd fn wlt ewfztd azqde wlqw cqd eqmt lti atfazt qdp itewfit nittpfx wf wlt vqzqbo".toUpperCase(), "It Fxbze, zerxbyexbz jmm eiuzxrf, ejv ejv j pejswixl zx uzjlv bw txr iz; zx uexh j vxbqzily hxrmv zejz j peimv pjl zeild; jlv, wxuuiqmf, vx iz wrjpzipjmmf; fxb hxbmvl'z pxluzjlzmf rbl jprxuu txmdu zxvjf hex pmjis zejz \"j peimv vxl'z dlxh jlfzeily.\" J peimv'u qrjil uzjrzu tblpzixlily jz qirze; jlv eju, jsxlyuz izu sjlf iltjlz pxlkxmbzixlu, zexbujlvu xt vxrsjlz jzxsu, ilzx heipe Yxv eju wbz j sfuzip wxuuiqimizf txr lxzipily jl jvbmz'u jpz, jlv tiybrily xbz izu wbrwxrz. Bw zx jqxbz izu wrisjrf upexxm vjfu j peimv zeildu, ljzbrjmmf, xlmf xt wmjf. Qbz sjlf j txrs xt wmjf pxlzjilu viupiwmiljrf tjpzxru. \"Fxb pjl'z vx zeiu,\" xr \"zejz wbzu fxb xbz,\" uexhu j peimv zejz iz sbuz zeild, wrjpzipjmmf, xr tjim. Lxh, it, zerxbyexbz peimvexxv, j qrjil eju lx xwwxuizixl, iz iu wmjil zejz iz himm jzzjil j wxuizixl xt \"uzjzbu cbx,\" ju hize xbr xrviljrf jlisjmu. Sjl dlxhu lxz hef j pxh, vxy xr mixl hju lxz qxrl hize j qrjil xl j wjr hize xbru; hef ubpe jlisjmu pjllxz jvv, ubqzrjpz, xr xqzjil trxs qxxdu jlv upexxmily, zejz wjrjsxblz wxuizixl heipe Sjl exmvu zxvjf. (zen tiruz wjrjyrjwe xt yjvuqf)".toUpperCase()];

for (i = 0; i < samples.length; i++) {
    document.getElementById("sample" + (i + 1)).onclick = function () {
        ciphertext.value = samples[this.id[6] - 1];
        analyze_frequencies();
        generate_guess();
    }
}