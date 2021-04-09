let translations = `
be:Eña
am:Eña
are:Eña
is:Eña
have:Zal
had:mêz zal
will:nos
take:Toke
like:Jod
liked:mêz jod
eat:Xer
ate:mêz xer
eaten:mêz xer
do:Xoke
did:mêz xoke
done:mêz xoke
know:Sert
who:ker
knew:mêz sert
known:mêz sert
play:Pya
played:mêz pya
delete:dal
deleted:mêz dal
crier:Ayas
caler:Hin
build:Crofe
built:mêz crofe
speak:Pasko
spoke:mêz pasko
spoken:mêz pasko
come:Kema
came:mêz kema
leave:Endaro
left:mêz endaro
want:Vasti
wanted:mêz vasti
help:Fazre
helped:mêz fazre
create:Crefk
created:mêz crefk
go:Gehta
sell:Jerks
hear:Loña
Respect:Rospa
give:Xoyn
fly:Aeru
think:Sinka
can:Rin
own:Ely
call:Uxin
translate:traza
connaître:Mera
flee:Ferzo
see:Vizü
join:Joyt
learn:Vertz
I:Lo
you:Ru
she:Oz
he:oz
it:das
we:Xay
they:Me
a:
of:ko
by:ke
love:lyak
run:Fay
add:Gev
french:Franzix
France:Franzer
english:Englix
england:Engler
italian:Itolix
italy:Itoler
spanish:Espanix
spain:Espaner
german:Dôytlix
gemarny:Dôytler
chinese:Sinix
China:Siner
Japanese:Japanix
Japan:Japaner
Syrien:Syvix
Syrie:Syvier
Hongrois:Onranix
Hongrie:Onraner
Autrichien:Otravix
Autriche:Otravier
Turc:Turkix
Turquie:Turkier
Israelien:Isrenix
Israel:Isrenier
Portuguese:Partenix
Portugual:Partenier
country:Zixo
Paysage:Zixarn
the:el:vis
my:mi:mir
your:Tô:tôz
but:er
where:an
what:yur
and:ye
so:um::much:mult
because:y
in:qu
into:Eno
on:Om
to:Fons
me:ran
his:vâr:vâro
her:vâr:vâro
their:vârzu:vârsa
cat:mina
our:xam
how:temo
name:zame
fish:akwajila
person:indivad
Dragon:Drako
bin:Poba
folder:Fañ
if:Zo
tommorow:Aftonir
why:jeron
lover:Amodje
age:ajes
year:Ajas
bye:fonsiya::bye:fonsiya
good:sen
little:lusa
natural:neron
very:mult::much:mult
crazy:foy
bad:mavon
happy:yirän
angry:norens
secret:castän
or:os
cool:cool
secure:lokän
securised:lokän
security:lokän
useful:sanen
stupid:stofen
magic:magen
magical:magen
magically:magen
hello:hiya
hi:hiya
god:Drakonix
until:fonsas
Mine:Hend
about:Kern
number:nambär
Monday:Lundat
Tuesday: Mirdat
Wenesday:Osdat
Friday:Resdat
Thursday:takdat
Saturday:Satädat
Sunday:Endat
rule:rüls
please:plodza
thank:çame
here:lok
bed:warz
with:kay
no:ne
yes:ya
?:?
,:,
!:!
.:.
dog:alwatoï
`;
/**
 *
 * @param {String} text
 */
function translate(text) {
  let result = "";
  let lines = translations.toLowerCase().split("\n").slice(1);

  let parsedText = text
    .toLowerCase()
    .replace(",", " ,")
    .replace("!", " !")
    .replace("?", " ?")
    .replace(".", " .")
    .replace("n't", " n't");

  let ws = parsedText.split(" ");

  for (let i = 0; i < ws.length; i++) {
    lines.forEach((l) => {
      let x = l.split(":");

      let noTrans = x[0];
      let trans = x[1];
      let trpluri = x[2];
      let compoNoTrad = x[3];
      let compoTrad = x[4];

      function not() {
        if (ws[i + 1] === "not" || ws[i + 1] === "n't") {
          result += "nil ";
        }
      }

      function compo() {
        if (compoNoTrad && compoTrad) {
          if (ws[i] === noTrans && ws[i + 1] === compoNoTrad) {
            result += compoTrad + " ";
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }

      if (ws[i] === " " || ws[i] === "" || typeof ws[i] === "undefined") return;
      if (ws[i] === noTrans || ws[i] === noTrans + "s") {
        not();

        if (ws[i + 1]) {
          if (ws[i + 1].endsWith("s")) {
            if (trpluri) {
              return (result += trpluri + " ");
            }
          } else {
            let c = compo();
            if (c) return;
          }
        }

        if (ws[i] === noTrans) {
          result += trans + " ";
        } else if (ws[i] === noTrans + "s") {
          if (ws[i] === "is" || ws[i] === "his") return;
          result += trans + " ";
        }
      }
    });
  }

  return result
    .replace(" ,", ",")
    .replace(" !", "!")
    .replace(" ?", "?")
    .replace(" .", ".")
    .replace(" n't", "n't");
}
