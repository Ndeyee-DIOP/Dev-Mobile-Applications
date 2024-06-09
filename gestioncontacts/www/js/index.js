$(document).ready(function() {
    // Fonction pour filtrer les contacts
    function filterContacts() {
        var searchTerm = $('#searchInput').val().toLowerCase().trim();
        $('#contactList li').each(function() {
            var name = $(this).find('h1').text().toLowerCase().trim();
            if (name.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Ajouter un écouteur d'événement pour le bouton de recherche
    $('#searchButton').click(filterContacts);

    // Ajouter un écouteur d'événement pour le champ de recherche
    $('#searchInput').on('input', filterContacts);

    // Ajouter un écouteur d'événement pour le bouton d'ajout de contact
    $('#addContactButton').click(function() {
        $('#addContactModal').popup('open');
    });

    // Ajouter un écouteur d'événement pour le bouton de sauvegarde de contact
    $('#saveContactButton').click(function() {
        var firstName = $('#firstName').val().trim();
        var lastName = $('#lastName').val().trim();
        var phoneNumber = $('#phoneNumber').val().trim();

        if (firstName && lastName && phoneNumber) {
            var newContact = `
                <li>
                    <a href="#">
                        <img src="img/avatar.jpg" alt="photo de profil du contact">
                        <div class="contact-info">
                            <h1>${firstName} ${lastName}</h1>
                            <p>${phoneNumber}</p>
                        </div>
                    </a>
                </li>
            `;
            $('#contactList').append(newContact).listview('refresh');
            $('#addContactModal').popup('close');
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});
