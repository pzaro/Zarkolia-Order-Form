// Λίστα προϊόντων για τον πίνακα παραγγελιών
const products = [
    { name: 'Z-DermAspis', price: 5.03 },
    { name: 'ZplastCream 40gr', price: 12.30 },
    { name: 'ZplastCream 100gr', price: 24.79 },
    { name: 'Bruise Off Bite Out & Pain Free cream', price: 5.26 },
    { name: 'Z-boost 30 caps', price: 14.93 },
    { name: 'Z-boost 12 caps', price: 6.99 },
    { name: 'Zarkolia Cosmetic pack', price: 23.89 },
    { name: 'Hydralia Face cream 50ml', price: 8.90 },
    { name: 'Revitacell Plus Face cream 50ml', price: 10.69 },
    { name: 'Revitace Eyes cream Luce 30ml', price: 10.10 },
    { name: 'Alveolair Sir', price: 7.65 }
];

// Πλήρεις περιγραφές προϊόντων. Η σειρά είναι ΙΔΙΑ με τη λίστα products.
const productDetails = [
    { // 1. Z-DermAspis
        name: 'Z-DermAspis',
        description: {
            consumer: `<h3>Καινοτόμο Σπρέι Διπλής Δράσης</h3><p>Το Z-Derm Aspis είναι σχεδιασμένο για να προσφέρει ταυτόχρονα καθαρισμό της επιδερμίδας και αποτελεσματική προστασία από τα έντομα. Η μοναδική του φόρμουλα συνδυάζει την αντισηπτική δράση της αλκοόλης με ένα ισχυρό μείγμα φυσικών αιθέριων ελαίων, δημιουργώντας μια προστατευτική ασπίδα ενάντια στα κουνούπια. Ενσωματώνει ενυδατικούς παράγοντες όπως η Αλόη και η Γλυκερίνη για να διατηρεί την ισορροπία υγρασίας του δέρματος.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Αιθυλική Αλκοόλη (Alcohol Denat.):</strong> Ταχείας δράσης και ευρέος φάσματος αντισηπτικό. Εξουδετερώνει βακτήρια, μύκητες και ιούς [1].</p><p><strong>Αιθέριο Έλαιο Ευκαλύπτου Citriodora (PMD):</strong> Το μόνο φυτικής προέλευσης συστατικό που συνιστάται από διεθνείς οργανισμούς υγείας (CDC) για την προστασία από τα κουνούπια, με αποτελεσματικότητα συγκρίσιμη με χαμηλές συγκεντρώσεις DEET [2, 3].</p><p><strong>Αιθέριο Έλαιο Σιτρονέλλας:</strong> Γνωστό φυσικό εντομοαπωθητικό που καλύπτει τις οσμές του ανθρώπινου σώματος [4].</p><p><strong>Αιθέριο Έλαιο Γερανιού:</strong> Πλούσιο σε γερανιόλη, ένα ισχυρό απωθητικό ευρέος φάσματος [5].</p><p><strong>Αλόη & Γλυκερίνη:</strong> Αντισταθμίζουν την αφυδατική δράση της αλκοόλης, προσφέροντας ενυδάτωση και καταπράυνση [6].</p>`,
            bibliography: `<ol><li>World Health Organization (WHO). (2009). WHO Guidelines on Hand Hygiene in Health Care.</li><li>Centers for Disease Control and Prevention (CDC). (2023). Repellents: Protection against Mosquitoes, Ticks, and Other Arthropods.</li><li>Carroll, S. P., & Loye, J. (2006). PMD, a registered botanical mosquito repellent...</li><li>Kongkaew, C., et al. (2011). Effectiveness of citronella preparations in preventing mosquito bites...</li><li>Müller, G. C., et al. (2009). Efficacy of the botanical repellents geraniol, linalool, and citronella...</li><li>Surjushe, A., Vasani, R., & Saple, D. G. (2008). Aloe vera: a short review.</li></ol>`
        }
    },
    { // 2. ZplastCream 40gr
        name: 'ZplastCream 40gr',
        description: {
            consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος. Η σύνθεσή της, βασισμένη σε μέλι, μαστίχα Χίου, ιπποφαές, και ελληνικά βότανα, προάγει ενεργά την ανάπλαση των ιστών σε πληγές, εγκαύματα και ουλές. Προσφέρει άμεση καταπράυνση από τον κνησμό και τη φλεγμονή.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση και την επούλωση [1].</p><p><strong>Έλαιο Αβοκάντο:</strong> Αυξάνει τη σύνθεση κολλαγόνου και μειώνει τη φλεγμονή [2].</p><p><strong>Ιπποφαές:</strong> Ενισχύει την αναγέννηση των ιστών και βελτιώνει την ελαστικότητα του δέρματος [3].</p><p><strong>Καλαμίνη:</strong> Παρέχει άμεση ανακούφιση από τον κνησμό και δρα ως ήπιο στυπτικό και αντισηπτικό [4].</p><p><strong>Καλέντουλα:</strong> Προάγει τον σχηματισμό κοκκιώδους ιστού και την αγγειογένεση [5].</p><p><strong>Μαστίχα Χίου:</strong> Καταπολεμά παθογόνα του δέρματος και προάγει τον πολλαπλασιασμό των ινοβλαστών [6].</p><p><strong>Μέλι:</strong> Δημιουργεί ένα ιδανικό περιβάλλον για ανάπλαση και προσφέρει ήπια αντισηπτική δράση [7].</p><p><strong>Θυμάρι:</strong> Προστατεύει την πληγή από επιμολύνσεις [8].</p>`,
            bibliography: `<ol><li>Öztürk, N., et al. (2007). Effects of Hypericum perforatum extract on skin wounds...</li><li>Lin, T. K., et al. (2017). Anti-Inflammatory and Skin Barrier Repair Effects of Topical Application of Some Plant Oils.</li><li>Upadhyay, N. K., et al. (2009). Safety and healing efficacy of Sea buckthorn...</li><li>Gupta, M., et al. (2014). Zinc therapy in dermatology: a review.</li><li>Leach, M. J. (2008). Calendula officinalis and wound healing: A systematic review.</li><li>Paraschos, S., et al. (2012). Chios mastic gum extract...</li><li>Molan, P. C. (2006). The evidence supporting the use of honey as a wound dressing.</li><li>Nagoor Meeran, M. F., et al. (2017). A Review on the Therapeutic Effects of Thymoquinone.</li></ol>`
        }
    },
    { // 3. ZplastCream 100gr
        name: 'ZplastCream 100gr',
        description: {
            consumer: `<h3>Εξειδικευμένη Αναπλαστική Κρέμα (100gr)</h3><p>Η Zplast Cream είναι σχεδιασμένη για την εντατική φροντίδα και ταχεία επούλωση του ταλαιπωρημένου δέρματος. Η σύνθεσή της, βασισμένη σε μέλι, μαστίχα Χίου, ιπποφαές, και ελληνικά βότανα, προάγει ενεργά την ανάπλαση των ιστών σε πληγές, εγκαύματα και ουλές. Η μεγαλύτερη συσκευασία είναι ιδανική για εκτεταμένη χρήση.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Βαλσαμόχορτο:</strong> Επιταχύνει την επιθηλιοποίηση.</p><p><strong>Έλαιο Αβοκάντο:</strong> Αυξάνει τη σύνθεση κολλαγόνου.</p><p><strong>Ιπποφαές:</strong> Ενισχύει την αναγέννηση των ιστών.</p><p><strong>Καλαμίνη:</strong> Παρέχει άμεση ανακούφιση από τον κνησμό.</p><p><strong>Καλέντουλα:</strong> Προάγει τον σχηματισμό κοκκιώδους ιστού.</p><p><strong>Μαστίχα Χίου:</strong> Καταπολεμά παθογόνα του δέρματος.</p><p><strong>Μέλι:</strong> Δημιουργεί ιδανικό περιβάλλον για ανάπλαση.</p><p><strong>Θυμάρι:</strong> Προστατεύει από επιμολύνσεις.</p>`,
            bibliography: `<ol><li>Öztürk, N., et al. (2007). Effects of Hypericum perforatum extract on skin wounds...</li><li>Lin, T. K., et al. (2017). Anti-Inflammatory and Skin Barrier Repair Effects of Topical Application of Some Plant Oils.</li><li>Upadhyay, N. K., et al. (2009). Safety and healing efficacy of Sea buckthorn...</li><li>Gupta, M., et al. (2014). Zinc therapy in dermatology: a review.</li><li>Leach, M. J. (2008). Calendula officinalis and wound healing: A systematic review.</li><li>Paraschos, S., et al. (2012). Chios mastic gum extract...</li><li>Molan, P. C. (2006). The evidence supporting the use of honey as a wound dressing.</li><li>Nagoor Meeran, M. F., et al. (2017). A Review on the Therapeutic Effects of Thymoquinone.</li></ol>`
        }
    },
    { // 4. Bruise Off Bite Out & Pain Free cream
        name: 'Bruise Off Bite Out & Pain Free cream',
        description: {
            consumer: `<h3>Κρέμα με Άρνικα & Αιθέρια Έλαια</h3><p>Η εξειδικευμένη αυτή κρέμα προσφέρει στοχευμένη ανακούφιση από μυϊκές και αρθρικές ενοχλήσεις που σχετίλονται με την καθημερινή καταπόνηση και τους μικροτραυματισμούς. Ο ισχυρός συνδυασμός από εκχύλισμα Άρνικας και συνεργιστικά αιθέρια έλαια δρα για τη μείωση της φλεγμονής, την ανακούφιση από τον πόνο λόγω πιασιμάτων ή διαστρεμμάτων και την επιτάχυνση της απορρόφησης των μωλώπων και του οιδήματος.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Άρνικα:</strong> Αποτελεσματική στη μείωση του πόνου, της δυσκαμψίας και του οιδήματος μετά από τραυματισμούς, καθώς και στη γρηγορότερη υποχώρηση των μωλώπων [1, 2].</p><p><strong>Λινέλαιο:</strong> Πλούσιο σε ωμέγα-3 (ALA), ασκεί αντιφλεγμονώδη δράση και ενυδατώνει το δέρμα [3].</p><p><strong>Αιθέριο Έλαιο Λεβάντας:</strong> Γνωστό για τις ηρεμιστικές και αναλγητικές του ιδιότητες, συμβάλλει στη μυϊκή χαλάρωση [4].</p><p><strong>Αιθέριο Έλαιο Μελισσόχορτου:</strong> Καταπραΰνει τους ερεθισμούς και μειώνει το οίδημα και τον πόνο [5].</p><p><strong>Ριγανέλαιο:</strong> Προκαλεί αίσθηση θερμότητας (υπεραιμία), βελτιώνει την τοπική κυκλοφορία και βοηθά στην ανακούφιση από μυϊκούς πόνους [6].</p>`,
            bibliography: `<ol><li>Lyss, G., et al. (1998). Helenalin, an anti-inflammatory sesquiterpene lactone...</li><li>Smith, A. G., et al. (2021). The effects of Arnica D30 in a marathon setting...</li><li>Lin, T. K., et al. (2017). Anti-inflammatory and skin barrier repair effects...</li><li>Nasiri, A., & Mahmodi, M. A. (2018). Aromatherapy massage with lavender essential oil...</li><li>Bounihi, A., et al. (2013). The antioxidant and analgesic effects of Melissa officinalis L...</li><li>Lima, M. D. S., et al. (2013). Anti-inflammatory and antinocicpetive effects of carvacrol...</li><li>Kriplani, P., et al. (2017). Arnica montana L. - a plant of healing...</li></ol>`
        }
    },
    { // 5. Z-boost 30 caps
        name: 'Z-boost 30 caps',
        description: {
            consumer: `<h3>Ενίσχυση του Ανοσοποιητικού Συστήματος</h3><p>Το Zarkolia Z-Boost είναι ένα προηγμένο συμπλήρωμα διατροφής, ειδικά σχεδιασμένο για την ολιστική ενίσχυση και θωράκιση του ανοσοποιητικού συστήματος. Η μοναδική του φόρμουλα συνδυάζει ισχυρά αντιοξειδωτικά συστατικά που δρουν συνεργατικά για να ενδυναμώσουν τη φυσική άμυνα του οργανισμού. Υποστηρίζει την παραγωγή ενέργειας, προστατεύει από το οξειδωτικό στρες και συμβάλλει στη μείωση του χρόνου ανάρρωσης.</p>`,
            science: `<h3>Αποδεδειγμένη Δράση Συστατικών</h3><p><strong>Ψευδάργυρος (Zinc):</strong> Απαραίτητο για τη λειτουργία των κυττάρων του ανοσοποιητικού. Μειώνει τη διάρκεια και τη σοβαρότητα των λοιμώξεων του ανώτερου αναπνευστικού [1].</p><p><strong>Σελήνιο (Selenium):</strong> Προστατεύει τα κύτταρα του
